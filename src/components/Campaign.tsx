import React, { useState, useEffect } from 'react';
import View from './View';

const Campaign = ({campaignId}) => {

    return (
        <div>
          <View campaignId={campaignId}/>
        </div>
    );
};

export default Campaign;
