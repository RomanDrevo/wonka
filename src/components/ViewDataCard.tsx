import React, { useState, useEffect } from 'react';
import {useCardDataQuery} from "./viewApi";

interface ViewData {
    id: string; //map
    location: {
        type: any
    };
    size: string // L S;
    apiSchema: ApiSchema;

}

interface ApiSchema {
    endpoint: string;
}

const ViewDataCard = ({item, filters }) => {

    const [innerFilter, setInnerFilter] = useState({})

    const { data, isSuccess, isFetching, error, refetch } = useCardDataQuery({ endpoint: item.apiSchema.endpoint, innerFilter, {...filters} });

    useEffect(() => {
        refetch()
    }, [filters, innerFilter, item.apiSchema.endpoint])


    const handleOnInnerFilterChange = (newFilters) => {
        setInnerFilter(newFilters)
    }

    return (
        <div>
            <h3>{data.id}</h3>

            <InnerFilter onInnerFilterChange={handleOnInnerFilterChange} />

            {responseData && (
                <div>
                    {/* Render the fetched data */}
                </div>
            )}
        </div>
    );
};

export default ViewDataCard;

enum location {
    TOP_RIGHT_LARGE = 'top_right_large',
    TOP_LEFT_LARGE = 'top_left_large',
    BOTTOM_RIGHT_LARGE = 'bottom_right_large',
    // more....
}

const view: View = {
    id: "dashboard",
    name: "Dashboard",
    viewData: [
        {
            id: "columnChart",
            location: location.TOP_RIGHT_LARGE,
            size: 'L',
            apiSchema: {
                endpoint: "/api/columnChart",
                queryParameters: {
                    timeRange: "2023-06-01T00:00:00Z/2023-06-30T23:59:59Z",
                    filters: {
                        gender: "female",
                        age: "25-40",
                        hairType: "curly"
                    }
                }
            }
        },
        {
            id: "map",
            location: location.TOP_RIGHT_LARGE,
            size: 'L',
            apiSchema: {
                endpoint: "/api/columnChart",
                queryParameters: {
                    timeRange: "2023-06-01T00:00:00Z/2023-06-30T23:59:59Z",
                    filters: {
                        gender: "female",
                        age: "25-40",
                        hairType: "curly"
                    }
                }
            }
        },
    ]
};

const query: Query = {
    timeRange: "2023-06-01T00:00:00Z/2023-06-30T23:59:59Z",
    filters: {
        // Fetch dynamic filters from an API and add them here
        gender: "female",
        age: "25-40",
        hairType: "curly"
    }
};
