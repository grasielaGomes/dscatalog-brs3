import { Bullet } from 'components/Pagination/Bullet/bullet';

const Pagination = () => {
  return (
    <section className="row gap-2">
      <Bullet page="&#10094;" isFilled={false} />
      <Bullet page={'1'} />
      <Bullet page={'2'} />
      <Bullet page={'3'} />
      <Bullet page="&#10095;" isFilled={false} />
    </section>
  );
};

export default Pagination;
