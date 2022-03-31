const OptionsP = ({ options }) => {
  return (
    <div>
      <hr />
      <p>Опции:</p>

      {/* translate keyO */}
      {options.map((o, i) => {
        for (const [keyO, valueO] of Object.entries(o)) {
          return (
            <ul key={i}>
              <li>
                {keyO}: {valueO || "Описания нет"}
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default OptionsP;
