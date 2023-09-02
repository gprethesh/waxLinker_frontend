import React, { useEffect, useState, useContext } from "react";
import { JsonRpc } from "eosjs";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { SessionContext } from "../router/SessionContext"; // Import the SessionContext
import Axios from "axios";
import { AiOutlineLogout } from "react-icons/Ai";
import Footer from "./Footer";

if (typeof window !== "undefined") {
  window.global = window;
}

const query = new URLSearchParams(window.location.search);
const encodedError = query.get("error");
const encodedSuccess = query.get("success");
const twitterUsername = query.get("twitterUsername");

const errorMessage = encodedError ? decodeURIComponent(encodedError) : null;

const successMessage = twitterUsername
  ? decodeURIComponent(twitterUsername)
  : null;

const endpoint = import.meta.env.VITE_APP_API_URL;
const rpc = new JsonRpc(endpoint);

const Login = () => {
  const { session, login, logout } = useContext(SessionContext);
  const [loading, setloading] = useState(false);
  const [info, setInfo] = useState(null);
  const [info2, setInfo2] = useState(null);
  const [transactionCompleted, setTransactionCompleted] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  let actor;
  let actorAsString;

  if (session) {
    actor = session.actor;
    actorAsString = actor.toString();
  }

  async function transact(newData) {
    if (!session) {
      throw new Error("Cannot transact without a session. please login");
    }
    setloading(true);
    const action = {
      account: import.meta.env.VITE_APP_WAXLINKER,
      name: "addwallet",
      authorization: [session.permissionLevel],
      data: {
        user: newData.user,
      },
    };
    const transactionResult = await session
      .transact({ action }, { broadcast: true })
      .catch((e) => {
        setloading(false);
        console.log("error caught in transact", e);
        throw e; // re-throw the error to be caught outside
      });

    const transactionId = transactionResult.response.transaction_id;
    setTransactionCompleted(true);

    return transactionId;
  }

  const getList = async () => {
    if (session) {
      // fetch the table data from the blockchain
      setloading(true);

      const username = session.actor.toString();

      const result = await rpc.get_table_rows({
        json: true,
        code: import.meta.env.VITE_APP_WAXLINKER,
        scope: import.meta.env.VITE_APP_WAXLINKER,
        table: "listtab",
        index_position: 1, // Use the byuser index
        key_type: "name", // The type of the user.value (account value)
        lower_bound: username,
        upper_bound: username,
      });

      if (result.rows[0] && result.rows[0].wallet_id) {
        setInfo(result.rows[0].wallet_id);
      } else {
        setInfo(undefined);
      }

      setloading(false);
    }
  };

  const getAddInfo = async () => {
    if (session) {
      // fetch the table data from the blockchain
      setLoadingData(true);

      const username = session.actor.toString();

      const result = await rpc.get_table_rows({
        json: true,
        code: import.meta.env.VITE_APP_WAXLINKER,
        scope: import.meta.env.VITE_APP_WAXLINKER,
        table: "verifytab",
        index_position: 1, // Use the byuser index
        key_type: "name", // The type of the user.value (account value)
        lower_bound: username,
        upper_bound: username,
      });

      if (result.rows[0] && result.rows[0].user_id) {
        setInfo2(result.rows[0].user_id);
      } else {
        setInfo2(undefined);
      }

      setLoadingData(false);
    }
  };

  const redirectToTwitterAuth = (actorAsString) => {
    window.location.href = `/api/auth/twitter?actor=${actorAsString}`;
  };

  useEffect(() => {
    getList();
    getAddInfo();
  }, [session]);

  useEffect(() => {
    const waitForTransaction = async () => {
      // Wait for 3 seconds to ensure the transaction has been processed
      await new Promise((resolve) => setTimeout(resolve, 3000));
      getList();
      setTransactionCompleted(false);
      getAddInfo();
    };

    waitForTransaction();
  }, [transactionCompleted]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[theme-background] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
          {session && (
            <button
              type="button"
              className="absolute top-2 right-2 btn btn-secondary"
              onClick={logout}
            >
              <>{actorAsString}</> <AiOutlineLogout />
            </button>
          )}

          <div>
            {(!session || info === undefined || info2 === undefined) && (
              <>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-[theme-text]">
                  {!session && "Choose Your Login Method"}
                  {session && info === undefined && "Verify Your Wax Wallet"}
                  {session &&
                    info !== undefined &&
                    info2 === undefined &&
                    "Bind Twitter with Wax"}
                </h2>
              </>
            )}
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}

          {/* {successMessage && (
        <p className="success btn-primary">
          {successMessage} Successfully Linked with {actorAsString}
        </p>
      )} */}
          {loadingData ? (
            <>Loading...</>
          ) : (
            <>
              <div className="space-y-4">
                {!session ? (
                  <>
                    {" "}
                    <button
                      type="button"
                      className="btn btn-primary w-full"
                      onClick={login}
                    >
                      Wax
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    {info === undefined && (
                      <button
                        type="button"
                        className="btn btn-secondary w-full"
                        disabled={loading}
                        onClick={async () => {
                          const newData = {
                            user: actorAsString,
                          };
                          try {
                            await transact(newData);
                          } catch (e) {
                            console.log("Transaction failed", e);
                            setloading(false);
                          }
                        }}
                      >
                        {loading ? "Loading..." : "Verify Wallet"}
                      </button>
                    )}
                    {info !== undefined && info2 === undefined && (
                      <button
                        type="button"
                        className="btn btn-info w-full"
                        onClick={() => redirectToTwitterAuth(actorAsString)}
                      >
                        Connect Twitter
                      </button>
                    )}
                    {session && info !== undefined && info2 !== undefined && (
                      <>
                        <h2 className="mt-6 text-center text-1xl font-extrabold text-[theme-text]">
                          Successfully linked Wax Wallet with Twitter account.
                        </h2>
                      </>
                    )}
                    {}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
