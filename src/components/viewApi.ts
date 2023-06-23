import { API_ROUTES } from '@myatt/config';
import { baseQuery, createQueryApi } from '@myatt/network';
import { CardsResponse, SkeletonResponse } from '../../skeletonPage.types';

const enhancedBaseQuery = () => {
    return baseQuery({ baseUrl: API_ROUTES.ACCOUNT_OVERVIEW.feed });
};

type CommonUrlParams = {
    pageName: string;
    skeletonId?: string;
    cardNames?: string[];
    contextId?: string;
};

export const ViewApi = createQueryApi({
    reducerPath: 'viewApi',
    baseQuery: enhancedBaseQuery(),
    endpoints: builder => ({
        getViewData: builder.query<>({
            query: args => {
                return {
                    url: 'view',
                    params: args,
                };
            },
        }),
        getCardData: builder.query<CardsResponse, CommonUrlParams>({
            query: arg => {
                return { url: arg.endpoint, params: { ...arg }};
            },
        }),
    }),
});

// init - triggers a query and returns a promise
export const initiateGetPageSkeletonQuery = SkeletonPageApi.endpoints.getPageSkeleton.initiate;
export const { useViewDataQuery, useCardDataQuery } = ViewApi;
