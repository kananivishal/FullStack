import React from 'react'

export default function Card(props) {
    return (
        <>
            <div class="flex flex-col items-center gap-6 p-7 md:flex-col md:gap-8 rounded-2xl">
                <div>
                    <img class="size-48 shadow-xl rounded-md" alt="" src={props.img} />
                </div>
                <div class="flex flex-col items-center md:items-center">
                    <span class="text-2xl font-medium">{props.name}</span>
                    <span class="font-medium text-sky-500">{props.band}</span>
                    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <span>No. {props.num}</span>
                        <span>·</span>
                        <span>{props.year}</span>
                    </span>
                </div>
            </div>
        </>
    )
}
