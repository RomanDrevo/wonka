import React, { useState, useEffect } from 'react';
import ViewDataCard from './ViewDataCard';
import FilterBar from './FilterBar';
import {useViewDataQuery} from "./viewApi";


interface View {
    id: string;
    name: string;
    viewData: ViewData[];
}

interface ViewData {
    id: string; //map
    location: {
        Type: any
    };
    size: string // L S;
    apiSchema: ApiSchema;

}

interface ApiSchema {
    endpoint: string;
}

interface Query {
    timeRange: string; // ISO format
    filters: {
        [key: string]: string;
    };
}




const View = ({campaignId }: {campaignId: number}) => {

    const { data, isSuccess, isFetching, error, refetch } = useViewDataQuery({campaignId});


    const filters = useSelector<RootState, Query>(getCurrentFilters)


    useEffect(() => {
         refetch()

    }, [filters])


    return (
        <div>
            <h2>{data.name}</h2>

            <FilterBar filters={filters} ></FilterBar>


            {
                data.viewData.map((item: ViewData) => {
                    return <ViewDataCard item={item} filters={filters} />
                })
            }
           // Grid of 6 elements
        </div>
    );
};

export default View;
