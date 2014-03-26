module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Web.br 2014",
      description: "Conferência Web W3C Brasil 2014",
      date: "Setembro 25 e 26",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "Blue Tree Premium Morumbi",
      address: "Av. Roque Petroni Junior, 1000",
      city: "São Paulo",
      state: "SP"
    },

    // Site info
    site: {
      theme: "webbr2014-lp"
      //theme: "yellow-swan"
      //url: "http://braziljs.github.io/conf-boilerplate/",
      //googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'speakers',
      'newsletter',
      'location',
      'partners',
      'sponsors'
      //'schedule',
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      speakers: "Atrações anteriores",
      newsletter: "Newsletter",
      location: "Local",
      partners: "Promoção",
      sponsors: "Organização",
      schedule: "Agenda",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Fernanda Weiden",
        photo: "themes/webbr2014-lp/img/fernanda_weiden.jpg",
        company: "Gerente de Engenharia de Produção no Facebook",
        time: "2013"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Web 25 anos",
        logo: "themes/webbr2014-lp/img/web25-logo.svg",
        url: "http://www.webat25.org/"
      },
      {
        name: "W3C 20 anos",
        logo: "themes/webbr2014-lp/img/w3c20-logo.svg",
        url: "http://www.w3.org/"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "W3C Brasil",
        logo: "themes/webbr2014-lp/img/w3cbr.png",
        url: "http://www.w3c.br"
      },
      {
        name: "NIC.br",
        logo: "themes/webbr2014-lp/img/nicbr.png",
        url: "http://nic.br"
      },
      {
        name: "CGI.br",
        logo: "themes/webbr2014-lp/img/cgibr.png",
        url: "http://cgi.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};