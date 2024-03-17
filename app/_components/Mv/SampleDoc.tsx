import "./sampleDoc.css";

export const SampleDoc = () => {
  const string = "{string}";

  return (
    <section className="sampleDoc">
      <article>
        <h3 className="subsection-title h3">Members</h3>
        <h4 className="name h4" id="buttonLabel">
          <span className="type-signature">(constant) </span>buttonLabel
          <span className="type-signature"> :text</span>
        </h4>
        <div className="description">Button label</div>
        <h5 className="">Type:</h5>
        <ul>
          <li>
            <span className="param-type">string</span>
          </li>
        </ul>
        <dl className="details">
          <dt className="tag-source">Source:</dt>
          <dd className="tag-source">
            <ul className="dummy">
              <li>
                <a href="/">index.js</a>, <a href="/">line 5</a>
              </li>
            </ul>
          </dd>
        </dl>
        <h3 className="subsection-title">Methods</h3>
        <h4 className="name" id="getGreetingText">
          getGreetingText
          <span className="signature">(user)</span>
          <span className="type-signature"> → {string}</span>
        </h4>
        <div className="description">Returns greeting message</div>
        <h5>Parameters:</h5>
        <table className="params">
          <thead>
            <tr>
              <th>Name</th>

              <th>Type</th>

              <th className="last">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="name">
                <code>user</code>
              </td>

              <td className="type">
                <span className="param-type">string</span>
              </td>

              <td className="description last">user name</td>
            </tr>
          </tbody>
        </table>
        <dl className="details">
          <dt className="tag-source">Source:</dt>
          <dd className="tag-source">
            <ul className="dummy">
              <li>
                <a href="/generated">index.js</a>,{" "}
                <a href="/generated">line 12</a>
              </li>
            </ul>
          </dd>
        </dl>
        <h5>Returns:</h5>
        <div className="param-desc">greeting text</div>
        <dl>
          <dt>Type</dt>
          <dd>
            <span className="param-type">string</span>
          </dd>
        </dl>
      </article>
    </section>
  );
};
