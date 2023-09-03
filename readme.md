
# WaxLinker Frontend

A frontend application to link your WAX wallet with your Twitter account. The application provides a seamless experience for users to authenticate using WAX, verify their wallet, and then connect their Twitter account.

## Setup & Installation

1. Clone the repository.
2. Install the required packages using `npm install`.
3. Copy the `env_example` to `.env` and fill in the necessary environmental variables.
4. Start the development server using `npm run dev`.


## Building the Application

To build the application for production:

1. Ensure you've set up the necessary environmental variables in the `.env` file.
2. Run the build command:
   ```
   npm run build
   ```
3. Once the build process completes, you'll find the optimized build in the `dist/` directory. This can be deployed to any web server.

## Directory Structure

- `src/`: Contains the main application code.
   - `components/`: React components used in the application.
   - `router/`: Contains routing related utilities and session context.
- `public/`: Static assets and images.

## Application Flow

1. Users land on the login page.
2. They can log in using WAX.
3. Post authentication, they have an option to verify their WAX wallet.
4. After wallet verification, users can link their Twitter account.

## Twitter Integration

The application uses a redirection mechanism to authenticate users with Twitter. After successful authentication, the Twitter username is fetched from the URL's query parameters for further verification.

## WAX Integration

### Dependencies Used:

- `@wharfkit/session`: Provides session management capabilities.
- `@wharfkit/wallet-plugin-anchor`: Plugin for integrating with the Anchor wallet.
- `@wharfkit/wallet-plugin-cloudwallet`: Plugin for integrating with Cloud Wallet.
- `@wharfkit/web-renderer`: Likely provides rendering utilities or components.

### Session Management

The application uses the `@wharfkit/session` package for session context, allowing components to access the current session's state and provide functionalities like login and logout.

### Wallet Options

Users have the flexibility to authenticate using multiple wallet options like Anchor and Cloud Wallet.

## Environmental Variables

- `VITE_APP_API_URL`: WAX API endpoint.
- `VITE_APP_WAX_CHAIN`: Related to the WAX blockchain.
- `VITE_APP_WAXLINKER`: Specific value or key for WAXLinker.

## Contributing & Feedback

Feel free to fork the repository, make changes, and submit pull requests. For any feedback or issues, please raise an issue in the repository.

---

Made with ❤️ by WaxLinker Team
