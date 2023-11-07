export const Link = () => {
  const items = [
    "Homepage",
    "Services",
    "Contact",
    "About",
    "Resume",
    "skills",
  ];

  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};
