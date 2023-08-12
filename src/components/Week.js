function Day() {
  return (
    <p className="day">päivä</p>
  )
}

const Week = () => {
  return (
    <div>
      <p>Viikkonäkymä</p>
      <section className="week">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </section>
    </div>
  )
}
export default Week