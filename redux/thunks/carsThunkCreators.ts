import CarServices from "../../api/CarServices";
import { utilsConfig } from "../../utils";
import { IPost } from "../../types/types";
import { CarsActionTypes, CarsAction } from "../carsTypes";
import { ChangeEvent } from "react";
import { Dispatch } from "redux";

// form
export const postOrPutPostOnApi =
  (data: IPost, id?: number) => async (dispatch: Dispatch<CarsAction>) => {
    try {
      const res = await CarServices.postOrPutPost(data, id);

      if (res.status === 200 || 201 || 202) {
        dispatch({ type: CarsActionTypes.SET_IS_MODAL, flag: true });
        dispatch({
          type: CarsActionTypes.SET_ID_CREATED_POST,
          id: res.data.id,
        });
      }
    } catch (e) {
      dispatch({ type: CarsActionTypes.SET_ERROR, err: e.message });
    } finally {
      dispatch({ type: CarsActionTypes.SET_RESET_FORM });
    }
  };

export const deletePostOnApi =
  (id: number) => (dispatch: Dispatch<CarsAction>) => {
    CarServices.deletePost(id)
      .then(() => dispatch({ type: CarsActionTypes.SET_IS_MODAL, flag: false }))
      .catch((e) =>
        dispatch(dispatch({ type: CarsActionTypes.SET_ERROR, err: e.message }))
      )
      .finally(() =>
        dispatch({ type: CarsActionTypes.SET_UPDATE_PAGE_MANAGER, flag: true })
      );
  };

export const uploadImg =
  (e: ChangeEvent<HTMLInputElement>) =>
  async (dispatch: Dispatch<CarsAction>) => {
    try {
      const imgEl = e.target.files[0],
        base64 = (await utilsConfig.convertBase64(imgEl)) as string;

      dispatch({ type: CarsActionTypes.SET_BASE_IMG, img: base64 });
    } catch (e) {
      alert(e);
    }
  };
