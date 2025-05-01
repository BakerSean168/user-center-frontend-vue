export interface UserInfo {
  id: number;
  username: string;
  userAccount?: string;
  userPassword?: string;
  userAvatarUrl?: string;
  gender?: number;
  userPhone?: string;
  userEmail?: string;
  userStatus?: number;
  createTime?: string;
  updateTime?: string;
  userRole: number;
  isDelete?: number;
  planetCode?: string;
}

export interface UserRegisterRequest {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
  planetCode: string;
}
export interface UserLoginRequest {
  userAccount: string;
  userPassword: string;
}