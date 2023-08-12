function Day() {
  return (
    <p className="day">päivä</p>
  )
}

const Week = () => {
  return (
    <section>
      <h1>Viikkonäkymä</h1>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </section>
  )
}
export default Week