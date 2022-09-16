export interface User {
    nameid:      string;
    given_name:  string;
    family_name: string;
    email:       string;
    nbf:         number;
    exp:         number;
    iat:         number;
    iss:         string;
    aud:         string;
}