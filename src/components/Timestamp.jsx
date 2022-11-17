function Timestamp(props) {
  return (
    <div className="timestamp">
      <span className="handle">@{props.timestamp}</span>
    </div>
  );
}

export default Timestamp;
