export default function TemperatureDisplay({ temperature }) {
  const fahrenheit = (9 * temperature) / 5 + 32;
  return (
    <>
      <p>Temperature in Celsius: {temperature}</p>
      <p>Temperature in Fahrenheit: {fahrenheit}</p>
    </>
  );
}
