import React from "react"
import Radical from "./Radical"
import radicals from "../utils/json/radicals.json"

export default function RadicalsPage() {
  return (
    <div id="radicals-page">
      <div className="main-content">
        <div className="content">
          {/* {radicals.map((radical) => (
            <Radical key={radical.utf16} {...radical} />
          ))} */}
          <Radical {...radicals[0]} />
        </div>
      </div>
    </div>
  )
}
