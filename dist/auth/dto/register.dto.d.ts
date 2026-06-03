export declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export declare class RegisterDto {
    email: string;
    password: string;
    role: Role;
}
