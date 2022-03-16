import { Auth } from 'aws-amplify';

export async function signInService(username, password) {
  try {
    return await Auth.signIn(username, password);
  } catch (error) {
    return { error: 'error', message: error };
  }
}

