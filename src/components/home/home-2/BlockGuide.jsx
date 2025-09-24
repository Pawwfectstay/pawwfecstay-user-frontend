const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/2/1.svg",
      title: "Verified Pet Sitters",
      text: `All our pet sitters are thoroughly vetted and have extensive experience in pet care.`,
      delayAnim: "0",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/2.svg",
      title: "24/7 Pet Monitoring",
      text: `Regular updates and photos of your pets, so you know they're happy and safe.`,
      delayAnim: "50",
    },
    {
      id: 3,
      icon: "/img/featureIcons/2/3.svg",
      title: "Veterinary Support",
      text: `Emergency vet support available around the clock for peace of mind.`,
      delayAnim: "100",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
