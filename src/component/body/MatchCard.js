import React, {useState} from 'react'

const MatchCard = (props) => {
    return (
        <>
            <div className="flex flex-col items-center p-4 m-10 rounded-lg shadow-xs bg-gray-800/50">
                <img src={props?.matchDetail?.league?.logo} className="w-16"/>
                {/* <span className='text-lg font-normal text-gray-600 dark:text-gray-300'>{props?.matchDetail?.league?.name}</span> */}
                <span className='text-lg font-bold text-gray-600 dark:text-gray-300'>{props?.matchDetail?.teams?.home?.name} VS {props?.matchDetail?.teams?.away?.name}</span>
                <span className='text-lg font-normal text-gray-600 dark:text-gray-300'>{props?.matchDetail?.fixture?.venue?.name},{props?.matchDetail?.fixture?.venue?.city}({props?.matchDetail?.fixture?.date.slice(0,10)})</span>
            </div>
            <div className="flex justify-between p-4 m-10 rounded-lg shadow-xs bg-gray-800/50">
                <div className="flex items-center">
                    <div className="flex flex-col">
                        <span className="flex flex-row font-semibold text-gray-700 dark:text-gray-200 leading-10">{props?.matchDetail?.teams?.home?.name}<img alt="" src={props?.matchDetail?.teams?.home?.logo} className="w-10"/></span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.goals?.home !== null) ? props?.matchDetail?.goals?.home : '-'}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.score?.halftime?.home !== null) ? props?.matchDetail?.score?.halftime?.home : '-'}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.score?.extratime?.home !== null) ? props?.matchDetail?.score?.extratime?.home : '-'}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.score?.penalty?.home !== null) ? props?.matchDetail?.score?.penalty?.home : '-'}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col text-center">
                        <span className="font-semibold text-gray-700 dark:text-gray-200 leading-10">{props?.matchDetail?.fixture?.status?.long}</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-200 leading-10">vs</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-200 leading-10">Goals</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-200 leading-10">Half-time Score</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-200 leading-10">Extra-time Score</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-200 leading-10">Penalty Scrore</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col text-right">
                        <span className="flex flex-row font-semibold text-gray-700 dark:text-gray-200 leading-10"> <img src={props?.matchDetail?.teams?.away?.logo} className="w-10"/> {props?.matchDetail?.teams?.away?.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.goals?.away !== null) ? props?.matchDetail?.goals?.away : '-'}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.score?.halftime?.away !== null) ? props?.matchDetail?.score?.halftime?.away : '-'}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.score?.extratime?.away !== null) ? props?.matchDetail?.score?.extratime?.away : '-'}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-10">{(props?.matchDetail?.score?.penalty?.away !== null) ? props?.matchDetail?.score?.penalty?.away : '-'}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchCard