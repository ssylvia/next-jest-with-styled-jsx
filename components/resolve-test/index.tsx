
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  p { color: white }
`

const ResolveTest = () => {
  return <div className="css-resolve-test">
    <p className={className}>Component with CSS Resolve</p>
    {styles}
    <style jsx>{`
      .css-resolve-test {
        background: rgb(80, 80, 122);
        padding: 0 10px;
        border-radius: 10px;
      }
      `}</style>
  </div>
}

export default ResolveTest;