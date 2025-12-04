import Menu from "./menu";

function Footer() {
  return (
    <section className="w-screen h-100 content-center bg-black px-20 py-10 justify-items-center">
      <section className="w-3/4 grid grid-cols-5">
        <Menu
          heading={"ABOUT"}
          text1={"About Us"}
          text2={"Careers"}
          text3={"Awards & Recognition"}
          text4={"Investors"}
          text5={"Bata Franchise"}
          text6={"Share Department"}
        />
        <Menu
          heading={"Information"}
          text1={"TERMS & CONDITIONS"}
          text2={"Payment Options"}
          text3={"Privacy Policy"}
          text4={"Investors"}
          text5={"Franchise Programme"}
          text6={"Coverage areas"}
        />
        <Menu
          heading={"Popular Brands"}
          text1={"Bata"}
          text2={"Hush Puppies"}
          text3={"Power"}
          text4={"Comfit"}
          text5={"Weinbrenner"}
        />
        <Menu
          heading={"Customer Service"}
          text1={"FAQs"}
          text2={"MyBata"}
          text3={"Bata Stores"}
          text4={"All About Feet"}
          text5={"Contact Info"}
          text6={"Report Issue"}
        />
        <Menu
          heading={"Info"}
          text1={"Bata Shoe Company Bangladesh Ltd.Tongi Gazipur, Bangladesh."}
          text2=""
          text3={"Call us at: 09666200300 (9am-9pm)"}
          text4={'Email: bd.customercare@bata.com'}
        />
      </section>
    </section>
  );
}

export default Footer;






