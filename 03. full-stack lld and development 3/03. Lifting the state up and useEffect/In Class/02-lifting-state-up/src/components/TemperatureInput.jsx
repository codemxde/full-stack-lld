export default function TemperatureInput({ temperature, changeTemperature }) {
  return (
    <>
      <label htmlFor="temperature">Enter Temeperature</label>
      <input
        type="text"
        id="temperature"
        value={temperature}
        onChange={changeTemperature}
      />
    </>
  );
}
