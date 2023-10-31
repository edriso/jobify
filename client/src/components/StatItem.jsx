import Wrapper from '../assets/styledWrappers/StatItem';

function StatItem({ count, title, icon, color, bg }) {
  return (
    <Wrapper color={color} bg={bg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
}

export default StatItem;
