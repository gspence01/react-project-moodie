import React from "react"
import { entries } from "../test-object/entries"
import JournalEntry from "./JournalEntry"

export default function Gallery() {
    const display = entries.map((item, index) => {
        return (
            <JournalEntry item = {item} key = {index} />
        )
    })
    return(
        <div className="gallery">
            { display }
        </div>
    )
}