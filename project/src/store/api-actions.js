import {ActionGenerator} from './action';
import {APIRoute} from '../const';
import {updateOfferToClient} from '../utils/offer';


export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionGenerator.loadOffers(data.map((item) => updateOfferToClient(item)))))
);
