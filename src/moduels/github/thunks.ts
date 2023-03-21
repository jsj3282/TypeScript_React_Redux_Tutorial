import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {GithubAction} from "./types";
import {Dispatch} from "redux";
import {getUserProfileAsync} from "./actions";
import {getUserProfile} from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";

// export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
//     return async (dispatch: Dispatch) => {
//         const {request, success, failure} = getUserProfileAsync;
//         dispatch(request());
//         try {
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile));
//         } catch (e: any) {
//             dispatch(failure(e));
//         }
//     };
// }

export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);