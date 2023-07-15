to setup google authentication

To obtain the `clientID` and `clientSecret` for your Google Cloud project, you'll need to create OAuth 2.0 credentials. Here's a step-by-step guide on how to retrieve those values:

1. Go to the Google Cloud Console: https://console.cloud.google.com/

2. Select your project or create a new one if you haven't already.

3. In the left navigation menu, click on "APIs & Services" and then select "Credentials".

4. Click the "Create Credentials" button and choose "OAuth client ID" from the dropdown menu.

5. On the "Configure consent screen" page, select the appropriate user type and enter the necessary information, such as the application name and authorized domains.

6. Click "Save" to continue.

7. On the "Create OAuth client ID" page, choose "Web application" as the application type.

8. Enter a name for your OAuth client ID.

9. In the "Authorized JavaScript origins" field, enter the URL(s) where your application will be hosted during development (e.g., `http://localhost:3000`).

10. In the "Authorized redirect URIs" field, enter the callback URL(s) for the authentication process (e.g., `http://localhost:3000/auth/google/callback`).

11. Click "Create" to generate the OAuth client ID and client secret.

12. Once created, you should see a modal displaying your client ID and client secret. Copy these values and replace `'your-client-id'` and `'your-client-secret'` placeholders in the code provided earlier.

Remember to securely store your client secret and avoid exposing it in any public repositories or sharing it unintentionally.