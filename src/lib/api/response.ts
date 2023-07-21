import { ApiLoginResponse } from '@/pages/api/auth/login';
import { ApiLogoutResponse } from '@/pages/api/auth/logout';
import { ApiAuthOauthResponse } from '@/pages/api/auth/oauth';
import { ApiHealthcheckResponse } from '@/pages/api/healthcheck';
import { ApiSetupResponse } from '@/pages/api/setup';
import { ApiUploadResponse } from '@/pages/api/upload';
import { ApiUserResponse } from '@/pages/api/user';
import { ApiUserFilesResponse } from '@/pages/api/user/files';
import { ApiUserFilesIdResponse } from '@/pages/api/user/files/[id]';
import { ApiUserFilesIdPasswordResponse } from '@/pages/api/user/files/[id]/password';
import { ApiUserFilesTransactionResponse } from '@/pages/api/user/files/transaction';
import { ApiUserRecentResponse } from '@/pages/api/user/recent';
import { ApiUserStatsResponse } from '@/pages/api/user/stats';
import { ApiUserTokenResponse } from '@/pages/api/user/token';
import { ApiUserUrlsResponse } from '@/pages/api/user/urls';
import { ApiUserUrlsIdResponse } from '@/pages/api/user/urls/[id]';
import { ApiUsersResponse } from '@/pages/api/users';
import { ApiUsersIdResponse } from '@/pages/api/users/[id]';

export type Response = {
  '/api/auth/oauth': ApiAuthOauthResponse;
  '/api/auth/login': ApiLoginResponse;
  '/api/auth/logout': ApiLogoutResponse;
  '/api/user/files/[id]/password': ApiUserFilesIdPasswordResponse;
  '/api/user/files/[id]': ApiUserFilesIdResponse;
  '/api/user/files/transaction': ApiUserFilesTransactionResponse;
  '/api/user/files': ApiUserFilesResponse;
  '/api/user/urls/[id]': ApiUserUrlsIdResponse;
  '/api/user/urls': ApiUserUrlsResponse;
  '/api/user': ApiUserResponse;
  '/api/user/stats': ApiUserStatsResponse;
  '/api/user/recent': ApiUserRecentResponse;
  '/api/user/token': ApiUserTokenResponse;
  '/api/users': ApiUsersResponse;
  '/api/users/[id]': ApiUsersIdResponse;
  '/api/healthcheck': ApiHealthcheckResponse;
  '/api/setup': ApiSetupResponse;
  '/api/upload': ApiUploadResponse;
};
