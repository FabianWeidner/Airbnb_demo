const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How Airbnb works</p>
        <p>Newsromm</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Fabian Phillipe</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Fabian Phillipe</p>
        <p>Presents</p>
        <p>Full Stack Developer</p>
        <p>Love React</p>
        <p>Next.js and tailwind</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi</p>
        <p>Easter Eggs</p>
        <p>Thats what we like</p>
      </div>
    </div>
  );
};

export default Footer;
