const SimpleTest = () => {
  return <div className="simple-test">
    <p>Simple Styled JSX</p>
    <style jsx>{`
      .simple-test {
        background: rgb(80, 80, 122);
        padding: 0 10px;
        border-radius: 10px;
        color: white;
      }
      `}</style>
  </div>
}

export default SimpleTest;