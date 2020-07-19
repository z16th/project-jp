import React, { useState } from "react"
import KanaRow from './KanaRow'

export default function PractiKana() {
  const [allActive, setAllActive] = useState(false)

  const handleAllActive = () => {
    setAllActive((state) => !state)
    console.log(allActive)
  }

  return (
    <div id="practikana">
      <section className="rows-section">
        <button className="all-active" onClick={handleAllActive}>
          {!allActive ? "Seleccionar Todos" : "Deseleccionar Todos"}
        </button>
        <KanaRow from={0} to={4} state={allActive} updater={setAllActive} />
        <KanaRow from={5} to={9} state={allActive} updater={setAllActive} />
        <KanaRow from={10} to={14} state={allActive} updater={setAllActive} />
        <KanaRow from={15} to={19} state={allActive} updater={setAllActive} />
        <KanaRow from={20} to={24} state={allActive} updater={setAllActive} />
        <KanaRow from={25} to={29} state={allActive} updater={setAllActive} />
        <KanaRow from={30} to={34} state={allActive} updater={setAllActive} />
        <KanaRow from={35} to={37} state={allActive} updater={setAllActive} />
        <KanaRow from={38} to={42} state={allActive} updater={setAllActive} />
        <KanaRow from={43} to={44} state={allActive} updater={setAllActive} />
        <KanaRow from={45} to={45} state={allActive} updater={setAllActive} />
      </section>
    </div>
  )
}
