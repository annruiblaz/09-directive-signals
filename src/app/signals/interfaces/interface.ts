export interface MenuItem {
    title: string;
    route: string;
}

export interface SingleUserResponse {
    data:    User;
    support: Support;
}

export interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
