export const DateFormat = ({ date }) => {
  const formattedDate = new Date(date);
  return (
    <div>
      {formattedDate.getDate()}.{formattedDate.getMonth() + 1}.
      {formattedDate.getFullYear()}.
    </div>
  );
};
