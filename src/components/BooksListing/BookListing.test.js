import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import BooksListing from "./BooksListing";
import BooksListing from "./BooksListing";
// import { getAll } from "../../BooksAPI";


describe("BookListing component", () => {
  // test("renders books if request succeeds", async () => {
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => [
    //     {
    //       books: [
    //         {
    //           title: "Needful Things",
    //           authors: ["Stephen King"],
    //           publisher: "Simon and Schuster",
    //           publishedDate: "2016-05-03",
    //           description:
    //             "Now available for the first time in a mass-market premium paperback edition—master storyteller Stephen King presents the classic #1 New York Times bestseller about a mysterious store than can sell you whatever you desire—but not without exacting a terrible price in return. “There are two prices for this. Half…and half. One half is cash. The other is a deed. Do you understand?” The town of Castle Rock, Maine has seen its fair share of oddities over the years, but nothing is a peculiar as the little curio shop that’s just opened for business. Its mysterious proprietor, Leland Gaunt, seems to have something for everyone out on display at Needful Things…interesting items that run the gamut from worthless to priceless. Nothing has a price tag in this place, but everything is certainly for sale. The heart’s desire for any resident of Castle Rock can easily be found among the curiosities…in exchange for a little money and—at the specific request of Leland Gaunt—a whole lot of menace against their fellow neighbors. Everyone in town seems willing to make a deal at Needful Things, but the devil is in the details. And no one takes heed of the little sign handing on the wall: Caveat emptor. In other words, let the buyer beware…",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781501143786" },
    //             { type: "ISBN_10", identifier: "1501143786" },
    //           ],
    //           readingModes: { text: false, image: false },
    //           pageCount: 960,
    //           printType: "BOOK",
    //           categories: ["Fiction"],
    //           averageRating: 3.5,
    //           ratingsCount: 28,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "1.3.1.0.preview.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=jAUODAAAQBAJ&printsec=frontcover&dq=king&hl=&cd=8&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=jAUODAAAQBAJ&dq=king&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Needful_Things.html?hl=&id=jAUODAAAQBAJ",
    //           id: "jAUODAAAQBAJ",
    //           shelf: "currentlyReading",
    //         },
    //         {
    //           title: "Universal Artificial Intelligence",
    //           subtitle: "Sequential Decisions Based on Algorithmic Probability",
    //           authors: ["Marcus Hutter"],
    //           publisher: "Springer Science & Business Media",
    //           publishedDate: "2006-01-17",
    //           description:
    //             "Personal motivation. The dream of creating artificial devices that reach or outperform human inteUigence is an old one. It is also one of the dreams of my youth, which have never left me. What makes this challenge so interesting? A solution would have enormous implications on our society, and there are reasons to believe that the AI problem can be solved in my expected lifetime. So, it's worth sticking to it for a lifetime, even if it takes 30 years or so to reap the benefits. The AI problem. The science of artificial intelligence (AI) may be defined as the construction of intelligent systems and their analysis. A natural definition of a system is anything that has an input and an output stream. Intelligence is more complicated. It can have many faces like creativity, solving prob lems, pattern recognition, classification, learning, induction, deduction, build ing analogies, optimization, surviving in an environment, language processing, and knowledge. A formal definition incorporating every aspect of intelligence, however, seems difficult. Most, if not all known facets of intelligence can be formulated as goal driven or, more precisely, as maximizing some utility func tion. It is, therefore, sufficient to study goal-driven AI; e. g. the (biological) goal of animals and humans is to survive and spread. The goal of AI systems should be to be useful to humans.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9783540268772" },
    //             { type: "ISBN_10", identifier: "3540268774" },
    //           ],
    //           readingModes: { text: false, image: true },
    //           pageCount: 278,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.4.1.0.preview.1",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=fhoonlqqGP8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=fhoonlqqGP8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=fhoonlqqGP8C&printsec=frontcover&dq=artificial+intelligence&hl=&cd=5&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=fhoonlqqGP8C&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-fhoonlqqGP8C",
    //           id: "fhoonlqqGP8C",
    //           shelf: "currentlyReading",
    //         },
    //         {
    //           title:
    //             "Artificial Intelligence and Integrated Intelligent Information Systems",
    //           subtitle: "Emerging Technologies and Applications",
    //           authors: ["Xuan F. Zha"],
    //           publisher: "IGI Global",
    //           publishedDate: "2007",
    //           description:
    //             "Researchers in the evolving fields of artificial intelligence and information systems are constantly presented with new challenges. Artificial Intelligence and Integrated Intelligent Information Systems: Emerging Technologies and Applications provides both researchers and professionals with the latest knowledge applied to customized logic systems, agent-based approaches to modeling, and human-based models. Artificial Intelligence and Integrated Intelligent Information Systems: Emerging Technologies and Applications presents the recent advances in multi-mobile agent systems, the product development process, fuzzy logic systems, neural networks, and ambient intelligent environments among many other innovations in this exciting field.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781599042497" },
    //             { type: "ISBN_10", identifier: "1599042495" },
    //           ],
    //           readingModes: { text: false, image: true },
    //           pageCount: 454,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 4,
    //           ratingsCount: 1,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "preview-1.0.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=OECC3GyCXe8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=OECC3GyCXe8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=OECC3GyCXe8C&printsec=frontcover&dq=artificial+intelligence&hl=&cd=11&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=OECC3GyCXe8C&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-OECC3GyCXe8C",
    //           id: "OECC3GyCXe8C",
    //           shelf: "currentlyReading",
    //         },
    //         {
    //           title: "Artificial Intelligence: A Systems Approach",
    //           subtitle: "A Systems Approach",
    //           authors: ["M. Tim Jones"],
    //           publisher: "Jones & Bartlett Learning",
    //           publishedDate: "2015-06-16",
    //           description:
    //             "This book offers students and AI programmers a new perspective on the study of artificial intelligence concepts. The essential topics and theory of AI are presented, but it also includes practical information on data input & reduction as well as data output (i.e., algorithm usage). Because traditional AI concepts such as pattern recognition, numerical optimization and data mining are now simply types of algorithms, a different approach is needed. This “sensor / algorithm / effecter” approach grounds the algorithms with an environment, helps students and AI practitioners to better understand them, and subsequently, how to apply them. The book has numerous up to date applications in game programming, intelligent agents, neural networks, artificial immune systems, and more. A CD-ROM with simulations, code, and figures accompanies the book.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "1449631150" },
    //             { type: "ISBN_13", identifier: "9781449631154" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.3.2.0.preview.3",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=ekUHwvRP7nUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=ekUHwvRP7nUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=ekUHwvRP7nUC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=10&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=ekUHwvRP7nUC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-ekUHwvRP7nUC",
    //           id: "ekUHwvRP7nUC",
    //           shelf: "currentlyReading",
    //         },
    //         {
    //           title: "Artificial Intelligence in Education",
    //           subtitle: "Building Technology Rich Learning Contexts that Work",
    //           authors: [
    //             "Rosemary Luckin",
    //             "Kenneth R. Koedinger",
    //             "Jim E. Greer",
    //           ],
    //           publisher: "IOS Press",
    //           publishedDate: "2007-01-01",
    //           description:
    //             '" The nature of technology has changed since Artificial Intelligence in Education (AIED) was conceptualised as a research community and Interactive Learning Environments were initially developed. Technology is smaller, more mobile, networked, pervasive and often ubiquitous as well as being provided by the standard desktop PC. This creates the potential for technology supported learning wherever and whenever learners need and want it. However, in order to take advantage of this potential for greater flexibility we need to understand and model learners and the contexts with which they interact in a manner that enables us to design, deploy and evaluate technology to most effectively support learning across multiple locations, subjects and times. The AIED community has much to contribute to this endeavour. This publication contains papers, posters and tutorials from the 2007 Artificial Intelligence in Education conference in Los Angeles, CA, USA. "',
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781586037642" },
    //             { type: "ISBN_10", identifier: "1586037641" },
    //           ],
    //           readingModes: { text: false, image: true },
    //           pageCount: 738,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "preview-1.0.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=GEK93NUHdXYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=GEK93NUHdXYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=GEK93NUHdXYC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=18&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=GEK93NUHdXYC&dq=artificial+intelligence&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Artificial_Intelligence_in_Education.html?hl=&id=GEK93NUHdXYC",
    //           id: "GEK93NUHdXYC",
    //           shelf: "currentlyReading",
    //         },
    //         {
    //           title: "Artificial Intelligence",
    //           authors: ["Rajiv Chopra"],
    //           publisher: "S. Chand Publishing",
    //           publishedDate: "2012",
    //           description:
    //             "For the students of B.E./B.Tech Computer Science Engineering and Information Technology (CSE/IT)",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9788121939485" },
    //             { type: "ISBN_10", identifier: "8121939488" },
    //           ],
    //           readingModes: { text: false, image: true },
    //           pageCount: 318,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 3,
    //           ratingsCount: 3,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "0.2.0.0.preview.1",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=DDNHzcN6jasC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=DDNHzcN6jasC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=DDNHzcN6jasC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=20&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=DDNHzcN6jasC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-DDNHzcN6jasC",
    //           id: "DDNHzcN6jasC",
    //           shelf: "currentlyReading",
    //         },
    //         {
    //           title: "Artificial Intelligence and Business Management",
    //           authors: ["Derek Partridge", "Khateeb M. Hussain"],
    //           publisher: "Intellect Books",
    //           publishedDate: "1992",
    //           description:
    //             "After introducing the concept of artificial intelligence (AI), the authors of this text discuss the scope and limitations of AI technology in the various subfields that are expected to be relevant to business management systems - natural language processing, voice processing, image processing, and intelligent robots.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "0893918350" },
    //             { type: "ISBN_13", identifier: "9780893918354" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           pageCount: 343,
    //           printType: "BOOK",
    //           categories: ["Business & Economics"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "1.1.4.0.preview.3",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=3_zkZYwj43sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=3_zkZYwj43sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=3_zkZYwj43sC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=17&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=3_zkZYwj43sC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-3_zkZYwj43sC",
    //           id: "3_zkZYwj43sC",
    //           shelf: "currentlyReading",
    //         },
    //         {
    //           title: "The Cuckoo's Calling",
    //           authors: ["Robert Galbraith"],
    //           publisher: "Mulholland Books",
    //           publishedDate: "2013-04-30",
    //           description:
    //             "A brilliant debut mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story: His sister, thelegendary supermodel Lula Landry, known to her friends as the Cuckoo, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. Introducing Cormoran Strike, this is the acclaimed first crime novel by J.K. Rowling, writing under the pseudonym Robert Galbraith.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9780316206860" },
    //             { type: "ISBN_10", identifier: "0316206865" },
    //           ],
    //           readingModes: { text: true, image: false },
    //           pageCount: 464,
    //           printType: "BOOK",
    //           categories: ["Fiction"],
    //           averageRating: 3.5,
    //           ratingsCount: 3037,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.21.20.0.preview.2",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-evuwdDLfAyYC",
    //           id: "evuwdDLfAyYC",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "Lords of Finance",
    //           subtitle: "The Bankers Who Broke the World",
    //           authors: ["Liaquat Ahamed"],
    //           publisher: "Penguin",
    //           publishedDate: "2009-01",
    //           description:
    //             "Argues that the stock market crash of 1929 and subsequent Depression occurred as a result of poor decisions on the part of four central bankers who jointly attempted to reconstruct international finance by reinstating the gold standard.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "159420182X" },
    //             { type: "ISBN_13", identifier: "9781594201820" },
    //           ],
    //           readingModes: { text: false, image: false },
    //           pageCount: 564,
    //           printType: "BOOK",
    //           categories: ["Business & Economics"],
    //           averageRating: 4.5,
    //           ratingsCount: 14,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "1.0.0.0.preview.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC",
    //           id: "74XNzF_al3MC",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "Learning Web Development with React and Bootstrap",
    //           authors: ["Harmeet Singh", "Mehul Bhatt"],
    //           publishedDate: "2016-12-30",
    //           description:
    //             "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "1786462494" },
    //             { type: "ISBN_13", identifier: "9781786462497" },
    //           ],
    //           readingModes: { text: false, image: false },
    //           pageCount: 278,
    //           printType: "BOOK",
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "preview-1.0.0",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
    //           id: "sJf1vQAACAAJ",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "Android",
    //           subtitle: "Earth Book One of the Android Saga",
    //           authors: ["Paul J. Ward"],
    //           publisher: "Strategic Book Publishing",
    //           publishedDate: "2012-11-01",
    //           description:
    //             "Humans and androids are learning to co-exist as equals, but there are many opposers who seek to subvert their own creations and rule with absolute power ...Humans, with their android creations loyally at their side, have colonised the Moon and Mars. The Earth and Colonies Defence Service (ECDS) keeps the colonies and space lanes safe. On Earth, the Android Protectorate League, led by the enigmatic android leader Traviod Selius, campaign for android rights legislation. However, they are strongly opposed by the Anti-Android Faction (AAF). Following the approval of the Human and Android Cohabitation Act, ECDS Chief of Operations Nakaar Bacvor and co-conspirators form the military wing of the AAF. The AAF attack the Moon and Mars colonies, but are repulsed by ECDS forces. On Earth, with the AAF seemingly defeated, humans and androids unite to create the city of Utopia. Threats from a reformed, more powerful AAF emerges and the crew of the ECDS flagship Harmonia must formulate a defence. The mysterious Evolved Androids appear on Earth with a sytoid child called Eirini, who has strange powers. Utopian Enforcement officer Rul Calibra becomes her unlikely guardian and protector.Humankind's destiny hangs in the balance in the first series installment ANDROID: Earth - Book One of the ANDROID Saga. Paul J. Ward was born in 1969 in Lincolnshire, England, on the day of the historic Apollo 11 moon landing. He has been fascinated by space exploration and technological developments his whole life. This is his first novel. Publisher's website: http: //sbpra.com/PaulJWar",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781618971241" },
    //             { type: "ISBN_10", identifier: "1618971247" },
    //           ],
    //           readingModes: { text: false, image: false },
    //           pageCount: 446,
    //           printType: "BOOK",
    //           categories: ["Fiction"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "preview-1.0.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=xlp6NE2NWecC&printsec=frontcover&dq=android&hl=&cd=3&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=xlp6NE2NWecC&dq=android&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Android.html?hl=&id=xlp6NE2NWecC",
    //           id: "xlp6NE2NWecC",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "The Android Invasion",
    //           authors: ["Christopher Black"],
    //           publisher: "Yearling",
    //           publishedDate: "1984-06-01",
    //           description:
    //             "In this multiple plot adventure, readers and their robot companion must stop armies of attacking androids before they conquer the galaxy.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "0440400813" },
    //             { type: "ISBN_13", identifier: "9780440400813" },
    //           ],
    //           readingModes: { text: false, image: false },
    //           pageCount: 117,
    //           printType: "BOOK",
    //           categories: ["Androids"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "0.0.1.0.preview.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=tsRhkvo80iUC&q=android&dq=android&hl=&cd=2&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=tsRhkvo80iUC&dq=android&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/The_Android_Invasion.html?hl=&id=tsRhkvo80iUC",
    //           id: "tsRhkvo80iUC",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "AndEngine for Android Game Development Cookbook",
    //           authors: ["Jayme Schroeder"],
    //           publisher: "Packt Publishing Ltd",
    //           publishedDate: "2013-01-01",
    //           description:
    //             'A Cookbook with wide range of recipes to allow you to learn game development with AndEngine quickly and efficiently. "AndEngine for Android Game Development Cookbook" is geared toward developers who are interested in working with the most up-to-date version of AndEngine, sporting the brand new GLES 2.0 branch. The book will be helpful for developers who are attempting to break into the mobile game market with plans to release fun and exciting games while eliminating a large portion of the learning curve that is otherwise inevitable when getting into AndEngine development. This book requires a working installation of eclipse and the required libraries, including AndEngine and its various extensions set up prior to working with the recipes.',
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781849518994" },
    //             { type: "ISBN_10", identifier: "1849518998" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           pageCount: 380,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 4,
    //           ratingsCount: 1,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.3.3.0.preview.3",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=QCbUxHcYLskC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=QCbUxHcYLskC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=QCbUxHcYLskC&printsec=frontcover&dq=android&hl=&cd=8&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=QCbUxHcYLskC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-QCbUxHcYLskC",
    //           id: "QCbUxHcYLskC",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "Android Design Patterns",
    //           subtitle: "Interaction Design Solutions for Developers",
    //           authors: ["Greg Nudelman"],
    //           publisher: "John Wiley & Sons",
    //           publishedDate: "2013-02-19",
    //           description:
    //             "Master the challenges of Android user interface development with these sample patterns With Android 4, Google brings the full power of its Android OS to both smartphone and tablet computing. Designing effective user interfaces that work on multiple Android devices is extremely challenging. This book provides more than 75 patterns that you can use to create versatile user interfaces for both smartphones and tablets, saving countless hours of development time. Patterns cover the most common and yet difficult types of user interactions, and each is supported with richly illustrated, step-by-step instructions. Includes sample patterns for welcome and home screens, searches, sorting and filtering, data entry, navigation, images and thumbnails, interacting with the environment and networks, and more Features tablet-specific patterns and patterns for avoiding results you don't want Illustrated, step-by-step instructions describe what the pattern is, how it works, when and why to use it, and related patterns and anti-patterns A companion website offers additional content and a forum for interaction Android Design Patterns: Interaction Design Solutions for Developers provides extremely useful tools for developers who want to take advantage of the booming Android app development market.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781118417553" },
    //             { type: "ISBN_10", identifier: "1118417550" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           pageCount: 456,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 5,
    //           ratingsCount: 1,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.4.3.0.preview.3",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=Ifg1ZpSo7cwC&printsec=frontcover&dq=android&hl=&cd=4&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=Ifg1ZpSo7cwC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-Ifg1ZpSo7cwC",
    //           id: "Ifg1ZpSo7cwC",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "Best Android Apps",
    //           subtitle: "The Guide for Discriminating Downloaders",
    //           authors: ["Mike Hendrickson", "Brian Sawyer"],
    //           publisher: '"O\'Reilly Media, Inc."',
    //           publishedDate: "2010-04-27",
    //           description:
    //             "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781449382551" },
    //             { type: "ISBN_10", identifier: "144938255X" },
    //           ],
    //           readingModes: { text: false, image: false },
    //           pageCount: 240,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 4,
    //           ratingsCount: 3,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "preview-1.0.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
    //           id: "bUybAgAAQBAJ",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "Artificial Intelligence",
    //           authors: ["Blay Whitby"],
    //           publisher: "The Rosen Publishing Group",
    //           publishedDate: "2009-01-01",
    //           description:
    //             "Introduces artificial intelligence, what it can do, myths about it, and ways it may expand in the future.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781435851658" },
    //             { type: "ISBN_10", identifier: "143585165X" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           pageCount: 160,
    //           printType: "BOOK",
    //           categories: ["Juvenile Nonfiction"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "0.0.2.0.preview.3",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=oBK6mi7xBlIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=oBK6mi7xBlIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=oBK6mi7xBlIC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=6&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=oBK6mi7xBlIC&dq=artificial+intelligence&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=oBK6mi7xBlIC",
    //           id: "oBK6mi7xBlIC",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "Advanced Artificial Intelligence",
    //           authors: ["Zhongzhi Shi"],
    //           publisher: "World Scientific",
    //           publishedDate: "2011",
    //           description:
    //             "'Advanced Artificial Intelligence' consists of 16 chapters. The content of the book is novel, reflects the research updates in this field, and especially summarises the author's scientific efforts over many years.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9789814291347" },
    //             { type: "ISBN_10", identifier: "981429134X" },
    //           ],
    //           readingModes: { text: false, image: true },
    //           pageCount: 613,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "preview-1.0.0",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=wNbMOoTuGU0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=wNbMOoTuGU0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=wNbMOoTuGU0C&printsec=frontcover&dq=artificial+intelligence&hl=&cd=19&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=wNbMOoTuGU0C&dq=artificial+intelligence&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Advanced_Artificial_Intelligence.html?hl=&id=wNbMOoTuGU0C",
    //           id: "wNbMOoTuGU0C",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title:
    //             "Artificial Intelligence in Behavioral and Mental Health Care",
    //           authors: ["David D. Luxton"],
    //           publisher: "Academic Press",
    //           publishedDate: "2015-09-10",
    //           description:
    //             "Artificial Intelligence in Behavioral and Mental Health Care summarizes recent advances in artificial intelligence as it applies to mental health clinical practice. Each chapter provides a technical description of the advance, review of application in clinical practice, and empirical data on clinical efficacy. In addition, each chapter includes a discussion of practical issues in clinical settings, ethical considerations, and limitations of use. The book encompasses AI based advances in decision-making, in assessment and treatment, in providing education to clients, robot assisted task completion, and the use of AI for research and data gathering. This book will be of use to mental health practitioners interested in learning about, or incorporating AI advances into their practice and for researchers interested in a comprehensive review of these advances in one source. Summarizes AI advances for use in mental health practice Includes advances in AI based decision-making and consultation Describes AI applications for assessment and treatment Details AI advances in robots for clinical settings Provides empirical data on clinical efficacy Explores practical issues of use in clinical settings",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9780128007921" },
    //             { type: "ISBN_10", identifier: "0128007923" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           pageCount: 308,
    //           printType: "BOOK",
    //           categories: ["Psychology"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "1.4.5.0.preview.3",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=INvUBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=INvUBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=INvUBQAAQBAJ&printsec=frontcover&dq=artificial+intelligence&hl=&cd=4&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=INvUBQAAQBAJ&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-INvUBQAAQBAJ",
    //           id: "INvUBQAAQBAJ",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "The Linux Command Line",
    //           subtitle: "A Complete Introduction",
    //           authors: ["William E. Shotts, Jr."],
    //           publisher: "No Starch Press",
    //           publishedDate: "2012",
    //           description:
    //             "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9781593273897" },
    //             { type: "ISBN_10", identifier: "1593273894" },
    //           ],
    //           readingModes: { text: true, image: false },
    //           pageCount: 480,
    //           printType: "BOOK",
    //           categories: ["COMPUTERS"],
    //           averageRating: 4,
    //           ratingsCount: 2,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.2.2.0.preview.2",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-nggnmAEACAAJ",
    //           id: "nggnmAEACAAJ",
    //           shelf: "wantToRead",
    //         },
    //         {
    //           title: "React",
    //           subtitle:
    //             "Die praktische Einführung in React, React Router und Redux",
    //           authors: ["Nils Hartmann", "Oliver Zeigermann"],
    //           publisher: "dpunkt.verlag",
    //           publishedDate: "2016-07-07",
    //           description:
    //             "React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberflächen sowohl im Browser als auch auf Mobilgeräten. Entwickelt und eingesetzt von Facebook ist es mittlerweile als Open-Source-Projekt verfügbar und hat sich bereits im Einsatz bei diversen namhaften Websites, wie z. B. Airbnb und Netflix, bewährt. Dieses Buch stellt Ihnen die Konzepte von React, React Router und Redux anhand eines durchgehenden Beispiels vor. Sie lernen, wie Sie mit React wiederverwendbare UI-Komponenten entwickeln und wie Sie auf Basis der einzelnen Komponenten ganze Anwendungen zusammenbauen. Unter anderem werden folgende Themen behandelt: - Entwickeln und Testen eigener React-Komponenten auf Basis des JavaScript-Standards ECMAScript 2015 (ES6) - Routing mit dem React Router - Das Architektur-Modell Flux und wie damit komplette Anwendungen umgesetzt werden (am Beispiel des Redux-Frameworks) - Serverseitiges Rendern von React-Komponenten und -Anwendungen - Anbindung eines REST-Backends Die im Buch eingesetzten Sprachfeatures aus ES6 werden in einem eigenen Kapitel vorgestellt, sodass zum Verständnis des Buches Kenntnisse von ES5 ausreichen. Nach der Lektüre des Buches werden Sie in der Lage sein, eigene Projekte mit React umzusetzen.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9783864919640" },
    //             { type: "ISBN_10", identifier: "3864919649" },
    //           ],
    //           readingModes: { text: true, image: false },
    //           pageCount: 342,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.4.3.0.preview.2",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //           },
    //           language: "de",
    //           previewLink:
    //             "http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&cd=15&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/React.html?hl=&id=IOejDAAAQBAJ",
    //           id: "IOejDAAAQBAJ",
    //           shelf: "read",
    //         },
    //         {
    //           title: "Satire TV",
    //           subtitle: "Politics and Comedy in the Post-Network Era",
    //           authors: ["Jonathan Gray", "Jeffrey P. Jones", "Ethan Thompson"],
    //           publisher: "NYU Press",
    //           publishedDate: "2009-04-01",
    //           description:
    //             "Satirical TV has become mandatory viewing for citizens wishing to make sense of the bizarre contemporary state of political life. Shifts in industry economics and audience tastes have re-made television comedy, once considered a wasteland of escapist humor, into what is arguably the most popular source of political critique. From fake news and pundit shows to animated sitcoms and mash-up videos, satire has become an important avenue for processing politics in informative and entertaining ways, and satire TV is now its own thriving, viable television genre. Satire TV examines what happens when comedy becomes political, and politics become funny. A series of original essays focus on a range of programs, from The Daily Show to South Park, Da Ali G Show to The Colbert Report, The Boondocks to Saturday Night Live, Lil’ Bush to Chappelle’s Show, along with Internet D.I.Y. satire and essays on British and Canadian satire. They all offer insights into what today’s class of satire tells us about the current state of politics, of television, of citizenship, all the while suggesting what satire adds to the political realm that news and documentaries cannot.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "081473216X" },
    //             { type: "ISBN_13", identifier: "9780814732168" },
    //           ],
    //           readingModes: { text: true, image: false },
    //           pageCount: 288,
    //           printType: "BOOK",
    //           categories: ["Performing Arts"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "0.6.4.0.preview.2",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=1wy49i-gQjIC&printsec=frontcover&dq=satire&hl=&cd=3&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=1wy49i-gQjIC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-1wy49i-gQjIC",
    //           id: "1wy49i-gQjIC",
    //           shelf: "read",
    //         },
    //         {
    //           title: "Paradigms of Artificial Intelligence Programming",
    //           subtitle: "Case Studies in Common Lisp",
    //           authors: ["Peter Norvig"],
    //           publisher: "Morgan Kaufmann",
    //           publishedDate: "2014-06-28",
    //           description:
    //             "Paradigms of AI Programming is the first text to teach advanced Common Lisp techniques in the context of building major AI systems. By reconstructing authentic, complex AI programs using state-of-the-art Common Lisp, the book teaches students and professionals how to build and debug robust practical programs, while demonstrating superior programming style and important AI concepts. The author strongly emphasizes the practical performance issues involved in writing real working programs of significant size. Chapters on troubleshooting and efficiency are included, along with a discussion of the fundamentals of object-oriented programming and a description of the main CLOS functions. This volume is an excellent text for a course on AI programming, a useful supplement for general AI courses and an indispensable reference for the professional programmer.",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9780080571157" },
    //             { type: "ISBN_10", identifier: "0080571158" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           pageCount: 946,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 5,
    //           ratingsCount: 1,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "0.4.5.0.preview.3",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=eH6jBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=eH6jBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=eH6jBQAAQBAJ&printsec=frontcover&dq=artificial+intelligence&hl=&cd=3&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=eH6jBQAAQBAJ&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-eH6jBQAAQBAJ",
    //           id: "eH6jBQAAQBAJ",
    //           shelf: "read",
    //         },
    //         {
    //           title: "Artificial Intelligence Programming",
    //           authors: ["Eugene Charniak"],
    //           publisher: "Psychology Press",
    //           publishedDate: "1987",
    //           description:
    //             "Artificial intelligence research has thrived in the years since this best-selling AI classic was first published. The revision encompasses these advances by adapting its coding to Common Lisp, the well-documented language standard, and by bringing together even more useful programming tools. Today's programmers in AI will find this volume's superior coverage of programming techniques and easily applicable style anything but common.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "0898596092" },
    //             { type: "ISBN_13", identifier: "9780898596090" },
    //           ],
    //           readingModes: { text: false, image: true },
    //           pageCount: 533,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 3,
    //           ratingsCount: 1,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "1.0.1.0.preview.1",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=Lpicvmzww3sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=Lpicvmzww3sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=Lpicvmzww3sC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=9&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=Lpicvmzww3sC&dq=artificial+intelligence&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Artificial_Intelligence_Programming.html?hl=&id=Lpicvmzww3sC",
    //           id: "Lpicvmzww3sC",
    //           shelf: "read",
    //         },
    //         {
    //           title: "Artificial Intelligence",
    //           subtitle: "A New Synthesis",
    //           authors: ["Nils J. Nilsson"],
    //           publisher: "Newnes",
    //           publishedDate: "1998-04-17",
    //           description:
    //             "Intelligent agents are employed as the central characters in this new introductory text. Beginning with elementary reactive agents, Nilsson gradually increases their cognitive horsepower to illustrate the most important and lasting ideas in AI. Neural networks, genetic programming, computer vision, heuristic search, knowledge representation and reasoning, Bayes networks, planning, and language understanding are each revealed through the growing capabilities of these agents. The book provides a refreshing and motivating new synthesis of the field by one of AI's master expositors and leading researchers. Artificial Intelligence: A New Synthesis takes the reader on a complete tour of this intriguing new world of AI. An evolutionary approach provides a unifying theme Thorough coverage of important AI ideas, old and new Frequent use of examples and illustrative diagrams Extensive coverage of machine learning methods throughout the text Citations to over 500 references Comprehensive index",
    //           industryIdentifiers: [
    //             { type: "ISBN_13", identifier: "9780080499451" },
    //             { type: "ISBN_10", identifier: "0080499457" },
    //           ],
    //           readingModes: { text: true, image: true },
    //           pageCount: 513,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: true,
    //           contentVersion: "1.1.2.0.preview.3",
    //           panelizationSummary: {
    //             containsEpubBubbles: false,
    //             containsImageBubbles: false,
    //           },
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=lr1Po3DJZNIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=lr1Po3DJZNIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=lr1Po3DJZNIC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=7&source=gbs_api",
    //           infoLink:
    //             "https://play.google.com/store/books/details?id=lr1Po3DJZNIC&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://market.android.com/details?id=book-lr1Po3DJZNIC",
    //           id: "lr1Po3DJZNIC",
    //           shelf: "read",
    //         },
    //         {
    //           title: "Principles of Artificial Intelligence",
    //           authors: ["Nils J. Nilsson"],
    //           publisher: "Springer Science & Business Media",
    //           publishedDate: "1982-05-01",
    //           description:
    //             "Previous treatments of Artificial Intelligence (AI) divide the subject into its major areas of application, namely, natural language processing, automatic programming, robotics, machine vision, automatic theorem proving, intelligent data retrieval systems, etc. The major difficulty with this approach is that these application areas are now so extensive, that each could, at best, be only superficially treated in a book of this length. Instead, I have attempted here to describe fundamental AI ideas that underlie many of these applications. My organization of these ideas is not, then, based on the subject matter of their application, but is, instead, based on general computational concepts involving the kinds of data structures used, the types of operations performed on these data struc tures, and the properties of con'trol strategies used by AI systems. I stress, in particular, the important roles played in AI by generalized production systems and the predicate calculus. The notes on which the book is based evolved in courses and seminars at Stanford University and at the University of Massachusetts at Amherst. Although certain topics treated in my previous book, Problem solving Methods in Artificial Intelligence, are covered here as well, this book contains many additional topics such as rule-based systems, robot problem-solving systems, and structured-object representations.",
    //           industryIdentifiers: [
    //             { type: "ISBN_10", identifier: "3540113401" },
    //             { type: "ISBN_13", identifier: "9783540113409" },
    //           ],
    //           readingModes: { text: false, image: true },
    //           pageCount: 476,
    //           printType: "BOOK",
    //           categories: ["Computers"],
    //           averageRating: 5,
    //           ratingsCount: 2,
    //           maturityRating: "NOT_MATURE",
    //           allowAnonLogging: false,
    //           contentVersion: "preview-1.0.0",
    //           imageLinks: {
    //             smallThumbnail:
    //               "http://books.google.com/books/content?id=4JwN5DTpcqkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             thumbnail:
    //               "http://books.google.com/books/content?id=4JwN5DTpcqkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //           },
    //           language: "en",
    //           previewLink:
    //             "http://books.google.com/books?id=4JwN5DTpcqkC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=13&source=gbs_api",
    //           infoLink:
    //             "http://books.google.com/books?id=4JwN5DTpcqkC&dq=artificial+intelligence&hl=&source=gbs_api",
    //           canonicalVolumeLink:
    //             "https://books.google.com/books/about/Principles_of_Artificial_Intelligence.html?hl=&id=4JwN5DTpcqkC",
    //           id: "4JwN5DTpcqkC",
    //           shelf: "read",
    //         },
    //       ],
    //     },
    //   ],
    // });
    // render(<BooksListing />);
    // return getAll().then(data => expect(data).not.toHaveLength(0));
    // return BooksListing.getAllBooks().then(data => expect(data.books).toBe(undefined));
    // return getAll().then(data => expect(data.books).toBe(undefined));
    // const listItemElements = await screen.findAllByRole("listitem");
    // expect(categorizedBooks.currentlyReading).not.toHaveLength(0);
    // .expect(books).not.toHaveLength(0);

    // const books = [
    //   {
    //     title: "Needful Things",
    //     authors: ["Stephen King"],
    //     publisher: "Simon and Schuster",
    //     publishedDate: "2016-05-03",
    //     description:
    //       "Now available for the first time in a mass-market premium paperback edition—master storyteller Stephen King presents the classic #1 New York Times bestseller about a mysterious store than can sell you whatever you desire—but not without exacting a terrible price in return. “There are two prices for this. Half…and half. One half is cash. The other is a deed. Do you understand?” The town of Castle Rock, Maine has seen its fair share of oddities over the years, but nothing is a peculiar as the little curio shop that’s just opened for business. Its mysterious proprietor, Leland Gaunt, seems to have something for everyone out on display at Needful Things…interesting items that run the gamut from worthless to priceless. Nothing has a price tag in this place, but everything is certainly for sale. The heart’s desire for any resident of Castle Rock can easily be found among the curiosities…in exchange for a little money and—at the specific request of Leland Gaunt—a whole lot of menace against their fellow neighbors. Everyone in town seems willing to make a deal at Needful Things, but the devil is in the details. And no one takes heed of the little sign handing on the wall: Caveat emptor. In other words, let the buyer beware…",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781501143786" },
    //       { type: "ISBN_10", identifier: "1501143786" },
    //     ],
    //     readingModes: { text: false, image: false },
    //     pageCount: 960,
    //     printType: "BOOK",
    //     categories: ["Fiction"],
    //     averageRating: 3.5,
    //     ratingsCount: 28,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "1.3.1.0.preview.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=jAUODAAAQBAJ&printsec=frontcover&dq=king&hl=&cd=8&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=jAUODAAAQBAJ&dq=king&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Needful_Things.html?hl=&id=jAUODAAAQBAJ",
    //     id: "jAUODAAAQBAJ",
    //     shelf: "currentlyReading",
    //   },
    //   {
    //     title: "Universal Artificial Intelligence",
    //     subtitle: "Sequential Decisions Based on Algorithmic Probability",
    //     authors: ["Marcus Hutter"],
    //     publisher: "Springer Science & Business Media",
    //     publishedDate: "2006-01-17",
    //     description:
    //       "Personal motivation. The dream of creating artificial devices that reach or outperform human inteUigence is an old one. It is also one of the dreams of my youth, which have never left me. What makes this challenge so interesting? A solution would have enormous implications on our society, and there are reasons to believe that the AI problem can be solved in my expected lifetime. So, it's worth sticking to it for a lifetime, even if it takes 30 years or so to reap the benefits. The AI problem. The science of artificial intelligence (AI) may be defined as the construction of intelligent systems and their analysis. A natural definition of a system is anything that has an input and an output stream. Intelligence is more complicated. It can have many faces like creativity, solving prob lems, pattern recognition, classification, learning, induction, deduction, build ing analogies, optimization, surviving in an environment, language processing, and knowledge. A formal definition incorporating every aspect of intelligence, however, seems difficult. Most, if not all known facets of intelligence can be formulated as goal driven or, more precisely, as maximizing some utility func tion. It is, therefore, sufficient to study goal-driven AI; e. g. the (biological) goal of animals and humans is to survive and spread. The goal of AI systems should be to be useful to humans.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9783540268772" },
    //       { type: "ISBN_10", identifier: "3540268774" },
    //     ],
    //     readingModes: { text: false, image: true },
    //     pageCount: 278,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.4.1.0.preview.1",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=fhoonlqqGP8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=fhoonlqqGP8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=fhoonlqqGP8C&printsec=frontcover&dq=artificial+intelligence&hl=&cd=5&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=fhoonlqqGP8C&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-fhoonlqqGP8C",
    //     id: "fhoonlqqGP8C",
    //     shelf: "currentlyReading",
    //   },
    //   {
    //     title:
    //       "Artificial Intelligence and Integrated Intelligent Information Systems",
    //     subtitle: "Emerging Technologies and Applications",
    //     authors: ["Xuan F. Zha"],
    //     publisher: "IGI Global",
    //     publishedDate: "2007",
    //     description:
    //       "Researchers in the evolving fields of artificial intelligence and information systems are constantly presented with new challenges. Artificial Intelligence and Integrated Intelligent Information Systems: Emerging Technologies and Applications provides both researchers and professionals with the latest knowledge applied to customized logic systems, agent-based approaches to modeling, and human-based models. Artificial Intelligence and Integrated Intelligent Information Systems: Emerging Technologies and Applications presents the recent advances in multi-mobile agent systems, the product development process, fuzzy logic systems, neural networks, and ambient intelligent environments among many other innovations in this exciting field.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781599042497" },
    //       { type: "ISBN_10", identifier: "1599042495" },
    //     ],
    //     readingModes: { text: false, image: true },
    //     pageCount: 454,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 4,
    //     ratingsCount: 1,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "preview-1.0.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=OECC3GyCXe8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=OECC3GyCXe8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=OECC3GyCXe8C&printsec=frontcover&dq=artificial+intelligence&hl=&cd=11&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=OECC3GyCXe8C&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-OECC3GyCXe8C",
    //     id: "OECC3GyCXe8C",
    //     shelf: "currentlyReading",
    //   },
    //   {
    //     title: "Artificial Intelligence: A Systems Approach",
    //     subtitle: "A Systems Approach",
    //     authors: ["M. Tim Jones"],
    //     publisher: "Jones & Bartlett Learning",
    //     publishedDate: "2015-06-16",
    //     description:
    //       "This book offers students and AI programmers a new perspective on the study of artificial intelligence concepts. The essential topics and theory of AI are presented, but it also includes practical information on data input & reduction as well as data output (i.e., algorithm usage). Because traditional AI concepts such as pattern recognition, numerical optimization and data mining are now simply types of algorithms, a different approach is needed. This “sensor / algorithm / effecter” approach grounds the algorithms with an environment, helps students and AI practitioners to better understand them, and subsequently, how to apply them. The book has numerous up to date applications in game programming, intelligent agents, neural networks, artificial immune systems, and more. A CD-ROM with simulations, code, and figures accompanies the book.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "1449631150" },
    //       { type: "ISBN_13", identifier: "9781449631154" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.3.2.0.preview.3",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=ekUHwvRP7nUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=ekUHwvRP7nUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=ekUHwvRP7nUC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=10&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=ekUHwvRP7nUC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-ekUHwvRP7nUC",
    //     id: "ekUHwvRP7nUC",
    //     shelf: "currentlyReading",
    //   },
    //   {
    //     title: "Artificial Intelligence in Education",
    //     subtitle: "Building Technology Rich Learning Contexts that Work",
    //     authors: [
    //       "Rosemary Luckin",
    //       "Kenneth R. Koedinger",
    //       "Jim E. Greer",
    //     ],
    //     publisher: "IOS Press",
    //     publishedDate: "2007-01-01",
    //     description:
    //       '" The nature of technology has changed since Artificial Intelligence in Education (AIED) was conceptualised as a research community and Interactive Learning Environments were initially developed. Technology is smaller, more mobile, networked, pervasive and often ubiquitous as well as being provided by the standard desktop PC. This creates the potential for technology supported learning wherever and whenever learners need and want it. However, in order to take advantage of this potential for greater flexibility we need to understand and model learners and the contexts with which they interact in a manner that enables us to design, deploy and evaluate technology to most effectively support learning across multiple locations, subjects and times. The AIED community has much to contribute to this endeavour. This publication contains papers, posters and tutorials from the 2007 Artificial Intelligence in Education conference in Los Angeles, CA, USA. "',
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781586037642" },
    //       { type: "ISBN_10", identifier: "1586037641" },
    //     ],
    //     readingModes: { text: false, image: true },
    //     pageCount: 738,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "preview-1.0.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=GEK93NUHdXYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=GEK93NUHdXYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=GEK93NUHdXYC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=18&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=GEK93NUHdXYC&dq=artificial+intelligence&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Artificial_Intelligence_in_Education.html?hl=&id=GEK93NUHdXYC",
    //     id: "GEK93NUHdXYC",
    //     shelf: "currentlyReading",
    //   },
    //   {
    //     title: "Artificial Intelligence",
    //     authors: ["Rajiv Chopra"],
    //     publisher: "S. Chand Publishing",
    //     publishedDate: "2012",
    //     description:
    //       "For the students of B.E./B.Tech Computer Science Engineering and Information Technology (CSE/IT)",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9788121939485" },
    //       { type: "ISBN_10", identifier: "8121939488" },
    //     ],
    //     readingModes: { text: false, image: true },
    //     pageCount: 318,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 3,
    //     ratingsCount: 3,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "0.2.0.0.preview.1",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=DDNHzcN6jasC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=DDNHzcN6jasC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=DDNHzcN6jasC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=20&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=DDNHzcN6jasC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-DDNHzcN6jasC",
    //     id: "DDNHzcN6jasC",
    //     shelf: "currentlyReading",
    //   },
    //   {
    //     title: "Artificial Intelligence and Business Management",
    //     authors: ["Derek Partridge", "Khateeb M. Hussain"],
    //     publisher: "Intellect Books",
    //     publishedDate: "1992",
    //     description:
    //       "After introducing the concept of artificial intelligence (AI), the authors of this text discuss the scope and limitations of AI technology in the various subfields that are expected to be relevant to business management systems - natural language processing, voice processing, image processing, and intelligent robots.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "0893918350" },
    //       { type: "ISBN_13", identifier: "9780893918354" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     pageCount: 343,
    //     printType: "BOOK",
    //     categories: ["Business & Economics"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "1.1.4.0.preview.3",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=3_zkZYwj43sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=3_zkZYwj43sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=3_zkZYwj43sC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=17&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=3_zkZYwj43sC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-3_zkZYwj43sC",
    //     id: "3_zkZYwj43sC",
    //     shelf: "currentlyReading",
    //   },
    //   {
    //     title: "The Cuckoo's Calling",
    //     authors: ["Robert Galbraith"],
    //     publisher: "Mulholland Books",
    //     publishedDate: "2013-04-30",
    //     description:
    //       "A brilliant debut mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story: His sister, thelegendary supermodel Lula Landry, known to her friends as the Cuckoo, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. Introducing Cormoran Strike, this is the acclaimed first crime novel by J.K. Rowling, writing under the pseudonym Robert Galbraith.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9780316206860" },
    //       { type: "ISBN_10", identifier: "0316206865" },
    //     ],
    //     readingModes: { text: true, image: false },
    //     pageCount: 464,
    //     printType: "BOOK",
    //     categories: ["Fiction"],
    //     averageRating: 3.5,
    //     ratingsCount: 3037,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.21.20.0.preview.2",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-evuwdDLfAyYC",
    //     id: "evuwdDLfAyYC",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "Lords of Finance",
    //     subtitle: "The Bankers Who Broke the World",
    //     authors: ["Liaquat Ahamed"],
    //     publisher: "Penguin",
    //     publishedDate: "2009-01",
    //     description:
    //       "Argues that the stock market crash of 1929 and subsequent Depression occurred as a result of poor decisions on the part of four central bankers who jointly attempted to reconstruct international finance by reinstating the gold standard.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "159420182X" },
    //       { type: "ISBN_13", identifier: "9781594201820" },
    //     ],
    //     readingModes: { text: false, image: false },
    //     pageCount: 564,
    //     printType: "BOOK",
    //     categories: ["Business & Economics"],
    //     averageRating: 4.5,
    //     ratingsCount: 14,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "1.0.0.0.preview.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC",
    //     id: "74XNzF_al3MC",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "Learning Web Development with React and Bootstrap",
    //     authors: ["Harmeet Singh", "Mehul Bhatt"],
    //     publishedDate: "2016-12-30",
    //     description:
    //       "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "1786462494" },
    //       { type: "ISBN_13", identifier: "9781786462497" },
    //     ],
    //     readingModes: { text: false, image: false },
    //     pageCount: 278,
    //     printType: "BOOK",
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "preview-1.0.0",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
    //     id: "sJf1vQAACAAJ",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "Android",
    //     subtitle: "Earth Book One of the Android Saga",
    //     authors: ["Paul J. Ward"],
    //     publisher: "Strategic Book Publishing",
    //     publishedDate: "2012-11-01",
    //     description:
    //       "Humans and androids are learning to co-exist as equals, but there are many opposers who seek to subvert their own creations and rule with absolute power ...Humans, with their android creations loyally at their side, have colonised the Moon and Mars. The Earth and Colonies Defence Service (ECDS) keeps the colonies and space lanes safe. On Earth, the Android Protectorate League, led by the enigmatic android leader Traviod Selius, campaign for android rights legislation. However, they are strongly opposed by the Anti-Android Faction (AAF). Following the approval of the Human and Android Cohabitation Act, ECDS Chief of Operations Nakaar Bacvor and co-conspirators form the military wing of the AAF. The AAF attack the Moon and Mars colonies, but are repulsed by ECDS forces. On Earth, with the AAF seemingly defeated, humans and androids unite to create the city of Utopia. Threats from a reformed, more powerful AAF emerges and the crew of the ECDS flagship Harmonia must formulate a defence. The mysterious Evolved Androids appear on Earth with a sytoid child called Eirini, who has strange powers. Utopian Enforcement officer Rul Calibra becomes her unlikely guardian and protector.Humankind's destiny hangs in the balance in the first series installment ANDROID: Earth - Book One of the ANDROID Saga. Paul J. Ward was born in 1969 in Lincolnshire, England, on the day of the historic Apollo 11 moon landing. He has been fascinated by space exploration and technological developments his whole life. This is his first novel. Publisher's website: http: //sbpra.com/PaulJWar",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781618971241" },
    //       { type: "ISBN_10", identifier: "1618971247" },
    //     ],
    //     readingModes: { text: false, image: false },
    //     pageCount: 446,
    //     printType: "BOOK",
    //     categories: ["Fiction"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "preview-1.0.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=xlp6NE2NWecC&printsec=frontcover&dq=android&hl=&cd=3&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=xlp6NE2NWecC&dq=android&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Android.html?hl=&id=xlp6NE2NWecC",
    //     id: "xlp6NE2NWecC",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "The Android Invasion",
    //     authors: ["Christopher Black"],
    //     publisher: "Yearling",
    //     publishedDate: "1984-06-01",
    //     description:
    //       "In this multiple plot adventure, readers and their robot companion must stop armies of attacking androids before they conquer the galaxy.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "0440400813" },
    //       { type: "ISBN_13", identifier: "9780440400813" },
    //     ],
    //     readingModes: { text: false, image: false },
    //     pageCount: 117,
    //     printType: "BOOK",
    //     categories: ["Androids"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "0.0.1.0.preview.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=tsRhkvo80iUC&q=android&dq=android&hl=&cd=2&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=tsRhkvo80iUC&dq=android&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/The_Android_Invasion.html?hl=&id=tsRhkvo80iUC",
    //     id: "tsRhkvo80iUC",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "AndEngine for Android Game Development Cookbook",
    //     authors: ["Jayme Schroeder"],
    //     publisher: "Packt Publishing Ltd",
    //     publishedDate: "2013-01-01",
    //     description:
    //       'A Cookbook with wide range of recipes to allow you to learn game development with AndEngine quickly and efficiently. "AndEngine for Android Game Development Cookbook" is geared toward developers who are interested in working with the most up-to-date version of AndEngine, sporting the brand new GLES 2.0 branch. The book will be helpful for developers who are attempting to break into the mobile game market with plans to release fun and exciting games while eliminating a large portion of the learning curve that is otherwise inevitable when getting into AndEngine development. This book requires a working installation of eclipse and the required libraries, including AndEngine and its various extensions set up prior to working with the recipes.',
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781849518994" },
    //       { type: "ISBN_10", identifier: "1849518998" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     pageCount: 380,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 4,
    //     ratingsCount: 1,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.3.3.0.preview.3",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=QCbUxHcYLskC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=QCbUxHcYLskC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=QCbUxHcYLskC&printsec=frontcover&dq=android&hl=&cd=8&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=QCbUxHcYLskC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-QCbUxHcYLskC",
    //     id: "QCbUxHcYLskC",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "Android Design Patterns",
    //     subtitle: "Interaction Design Solutions for Developers",
    //     authors: ["Greg Nudelman"],
    //     publisher: "John Wiley & Sons",
    //     publishedDate: "2013-02-19",
    //     description:
    //       "Master the challenges of Android user interface development with these sample patterns With Android 4, Google brings the full power of its Android OS to both smartphone and tablet computing. Designing effective user interfaces that work on multiple Android devices is extremely challenging. This book provides more than 75 patterns that you can use to create versatile user interfaces for both smartphones and tablets, saving countless hours of development time. Patterns cover the most common and yet difficult types of user interactions, and each is supported with richly illustrated, step-by-step instructions. Includes sample patterns for welcome and home screens, searches, sorting and filtering, data entry, navigation, images and thumbnails, interacting with the environment and networks, and more Features tablet-specific patterns and patterns for avoiding results you don't want Illustrated, step-by-step instructions describe what the pattern is, how it works, when and why to use it, and related patterns and anti-patterns A companion website offers additional content and a forum for interaction Android Design Patterns: Interaction Design Solutions for Developers provides extremely useful tools for developers who want to take advantage of the booming Android app development market.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781118417553" },
    //       { type: "ISBN_10", identifier: "1118417550" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     pageCount: 456,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 5,
    //     ratingsCount: 1,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.4.3.0.preview.3",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=Ifg1ZpSo7cwC&printsec=frontcover&dq=android&hl=&cd=4&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=Ifg1ZpSo7cwC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-Ifg1ZpSo7cwC",
    //     id: "Ifg1ZpSo7cwC",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "Best Android Apps",
    //     subtitle: "The Guide for Discriminating Downloaders",
    //     authors: ["Mike Hendrickson", "Brian Sawyer"],
    //     publisher: '"O\'Reilly Media, Inc."',
    //     publishedDate: "2010-04-27",
    //     description:
    //       "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781449382551" },
    //       { type: "ISBN_10", identifier: "144938255X" },
    //     ],
    //     readingModes: { text: false, image: false },
    //     pageCount: 240,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 4,
    //     ratingsCount: 3,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "preview-1.0.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
    //     id: "bUybAgAAQBAJ",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "Artificial Intelligence",
    //     authors: ["Blay Whitby"],
    //     publisher: "The Rosen Publishing Group",
    //     publishedDate: "2009-01-01",
    //     description:
    //       "Introduces artificial intelligence, what it can do, myths about it, and ways it may expand in the future.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781435851658" },
    //       { type: "ISBN_10", identifier: "143585165X" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     pageCount: 160,
    //     printType: "BOOK",
    //     categories: ["Juvenile Nonfiction"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "0.0.2.0.preview.3",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=oBK6mi7xBlIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=oBK6mi7xBlIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=oBK6mi7xBlIC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=6&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=oBK6mi7xBlIC&dq=artificial+intelligence&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=oBK6mi7xBlIC",
    //     id: "oBK6mi7xBlIC",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "Advanced Artificial Intelligence",
    //     authors: ["Zhongzhi Shi"],
    //     publisher: "World Scientific",
    //     publishedDate: "2011",
    //     description:
    //       "'Advanced Artificial Intelligence' consists of 16 chapters. The content of the book is novel, reflects the research updates in this field, and especially summarises the author's scientific efforts over many years.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9789814291347" },
    //       { type: "ISBN_10", identifier: "981429134X" },
    //     ],
    //     readingModes: { text: false, image: true },
    //     pageCount: 613,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "preview-1.0.0",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=wNbMOoTuGU0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=wNbMOoTuGU0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=wNbMOoTuGU0C&printsec=frontcover&dq=artificial+intelligence&hl=&cd=19&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=wNbMOoTuGU0C&dq=artificial+intelligence&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Advanced_Artificial_Intelligence.html?hl=&id=wNbMOoTuGU0C",
    //     id: "wNbMOoTuGU0C",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title:
    //       "Artificial Intelligence in Behavioral and Mental Health Care",
    //     authors: ["David D. Luxton"],
    //     publisher: "Academic Press",
    //     publishedDate: "2015-09-10",
    //     description:
    //       "Artificial Intelligence in Behavioral and Mental Health Care summarizes recent advances in artificial intelligence as it applies to mental health clinical practice. Each chapter provides a technical description of the advance, review of application in clinical practice, and empirical data on clinical efficacy. In addition, each chapter includes a discussion of practical issues in clinical settings, ethical considerations, and limitations of use. The book encompasses AI based advances in decision-making, in assessment and treatment, in providing education to clients, robot assisted task completion, and the use of AI for research and data gathering. This book will be of use to mental health practitioners interested in learning about, or incorporating AI advances into their practice and for researchers interested in a comprehensive review of these advances in one source. Summarizes AI advances for use in mental health practice Includes advances in AI based decision-making and consultation Describes AI applications for assessment and treatment Details AI advances in robots for clinical settings Provides empirical data on clinical efficacy Explores practical issues of use in clinical settings",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9780128007921" },
    //       { type: "ISBN_10", identifier: "0128007923" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     pageCount: 308,
    //     printType: "BOOK",
    //     categories: ["Psychology"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "1.4.5.0.preview.3",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=INvUBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=INvUBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=INvUBQAAQBAJ&printsec=frontcover&dq=artificial+intelligence&hl=&cd=4&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=INvUBQAAQBAJ&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-INvUBQAAQBAJ",
    //     id: "INvUBQAAQBAJ",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "The Linux Command Line",
    //     subtitle: "A Complete Introduction",
    //     authors: ["William E. Shotts, Jr."],
    //     publisher: "No Starch Press",
    //     publishedDate: "2012",
    //     description:
    //       "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9781593273897" },
    //       { type: "ISBN_10", identifier: "1593273894" },
    //     ],
    //     readingModes: { text: true, image: false },
    //     pageCount: 480,
    //     printType: "BOOK",
    //     categories: ["COMPUTERS"],
    //     averageRating: 4,
    //     ratingsCount: 2,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.2.2.0.preview.2",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-nggnmAEACAAJ",
    //     id: "nggnmAEACAAJ",
    //     shelf: "wantToRead",
    //   },
    //   {
    //     title: "React",
    //     subtitle:
    //       "Die praktische Einführung in React, React Router und Redux",
    //     authors: ["Nils Hartmann", "Oliver Zeigermann"],
    //     publisher: "dpunkt.verlag",
    //     publishedDate: "2016-07-07",
    //     description:
    //       "React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberflächen sowohl im Browser als auch auf Mobilgeräten. Entwickelt und eingesetzt von Facebook ist es mittlerweile als Open-Source-Projekt verfügbar und hat sich bereits im Einsatz bei diversen namhaften Websites, wie z. B. Airbnb und Netflix, bewährt. Dieses Buch stellt Ihnen die Konzepte von React, React Router und Redux anhand eines durchgehenden Beispiels vor. Sie lernen, wie Sie mit React wiederverwendbare UI-Komponenten entwickeln und wie Sie auf Basis der einzelnen Komponenten ganze Anwendungen zusammenbauen. Unter anderem werden folgende Themen behandelt: - Entwickeln und Testen eigener React-Komponenten auf Basis des JavaScript-Standards ECMAScript 2015 (ES6) - Routing mit dem React Router - Das Architektur-Modell Flux und wie damit komplette Anwendungen umgesetzt werden (am Beispiel des Redux-Frameworks) - Serverseitiges Rendern von React-Komponenten und -Anwendungen - Anbindung eines REST-Backends Die im Buch eingesetzten Sprachfeatures aus ES6 werden in einem eigenen Kapitel vorgestellt, sodass zum Verständnis des Buches Kenntnisse von ES5 ausreichen. Nach der Lektüre des Buches werden Sie in der Lage sein, eigene Projekte mit React umzusetzen.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9783864919640" },
    //       { type: "ISBN_10", identifier: "3864919649" },
    //     ],
    //     readingModes: { text: true, image: false },
    //     pageCount: 342,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.4.3.0.preview.2",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //     },
    //     language: "de",
    //     previewLink:
    //       "http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&cd=15&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/React.html?hl=&id=IOejDAAAQBAJ",
    //     id: "IOejDAAAQBAJ",
    //     shelf: "read",
    //   },
    //   {
    //     title: "Satire TV",
    //     subtitle: "Politics and Comedy in the Post-Network Era",
    //     authors: ["Jonathan Gray", "Jeffrey P. Jones", "Ethan Thompson"],
    //     publisher: "NYU Press",
    //     publishedDate: "2009-04-01",
    //     description:
    //       "Satirical TV has become mandatory viewing for citizens wishing to make sense of the bizarre contemporary state of political life. Shifts in industry economics and audience tastes have re-made television comedy, once considered a wasteland of escapist humor, into what is arguably the most popular source of political critique. From fake news and pundit shows to animated sitcoms and mash-up videos, satire has become an important avenue for processing politics in informative and entertaining ways, and satire TV is now its own thriving, viable television genre. Satire TV examines what happens when comedy becomes political, and politics become funny. A series of original essays focus on a range of programs, from The Daily Show to South Park, Da Ali G Show to The Colbert Report, The Boondocks to Saturday Night Live, Lil’ Bush to Chappelle’s Show, along with Internet D.I.Y. satire and essays on British and Canadian satire. They all offer insights into what today’s class of satire tells us about the current state of politics, of television, of citizenship, all the while suggesting what satire adds to the political realm that news and documentaries cannot.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "081473216X" },
    //       { type: "ISBN_13", identifier: "9780814732168" },
    //     ],
    //     readingModes: { text: true, image: false },
    //     pageCount: 288,
    //     printType: "BOOK",
    //     categories: ["Performing Arts"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "0.6.4.0.preview.2",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=1wy49i-gQjIC&printsec=frontcover&dq=satire&hl=&cd=3&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=1wy49i-gQjIC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-1wy49i-gQjIC",
    //     id: "1wy49i-gQjIC",
    //     shelf: "read",
    //   },
    //   {
    //     title: "Paradigms of Artificial Intelligence Programming",
    //     subtitle: "Case Studies in Common Lisp",
    //     authors: ["Peter Norvig"],
    //     publisher: "Morgan Kaufmann",
    //     publishedDate: "2014-06-28",
    //     description:
    //       "Paradigms of AI Programming is the first text to teach advanced Common Lisp techniques in the context of building major AI systems. By reconstructing authentic, complex AI programs using state-of-the-art Common Lisp, the book teaches students and professionals how to build and debug robust practical programs, while demonstrating superior programming style and important AI concepts. The author strongly emphasizes the practical performance issues involved in writing real working programs of significant size. Chapters on troubleshooting and efficiency are included, along with a discussion of the fundamentals of object-oriented programming and a description of the main CLOS functions. This volume is an excellent text for a course on AI programming, a useful supplement for general AI courses and an indispensable reference for the professional programmer.",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9780080571157" },
    //       { type: "ISBN_10", identifier: "0080571158" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     pageCount: 946,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 5,
    //     ratingsCount: 1,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "0.4.5.0.preview.3",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=eH6jBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=eH6jBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=eH6jBQAAQBAJ&printsec=frontcover&dq=artificial+intelligence&hl=&cd=3&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=eH6jBQAAQBAJ&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-eH6jBQAAQBAJ",
    //     id: "eH6jBQAAQBAJ",
    //     shelf: "read",
    //   },
    //   {
    //     title: "Artificial Intelligence Programming",
    //     authors: ["Eugene Charniak"],
    //     publisher: "Psychology Press",
    //     publishedDate: "1987",
    //     description:
    //       "Artificial intelligence research has thrived in the years since this best-selling AI classic was first published. The revision encompasses these advances by adapting its coding to Common Lisp, the well-documented language standard, and by bringing together even more useful programming tools. Today's programmers in AI will find this volume's superior coverage of programming techniques and easily applicable style anything but common.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "0898596092" },
    //       { type: "ISBN_13", identifier: "9780898596090" },
    //     ],
    //     readingModes: { text: false, image: true },
    //     pageCount: 533,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 3,
    //     ratingsCount: 1,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "1.0.1.0.preview.1",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=Lpicvmzww3sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=Lpicvmzww3sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=Lpicvmzww3sC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=9&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=Lpicvmzww3sC&dq=artificial+intelligence&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Artificial_Intelligence_Programming.html?hl=&id=Lpicvmzww3sC",
    //     id: "Lpicvmzww3sC",
    //     shelf: "read",
    //   },
    //   {
    //     title: "Artificial Intelligence",
    //     subtitle: "A New Synthesis",
    //     authors: ["Nils J. Nilsson"],
    //     publisher: "Newnes",
    //     publishedDate: "1998-04-17",
    //     description:
    //       "Intelligent agents are employed as the central characters in this new introductory text. Beginning with elementary reactive agents, Nilsson gradually increases their cognitive horsepower to illustrate the most important and lasting ideas in AI. Neural networks, genetic programming, computer vision, heuristic search, knowledge representation and reasoning, Bayes networks, planning, and language understanding are each revealed through the growing capabilities of these agents. The book provides a refreshing and motivating new synthesis of the field by one of AI's master expositors and leading researchers. Artificial Intelligence: A New Synthesis takes the reader on a complete tour of this intriguing new world of AI. An evolutionary approach provides a unifying theme Thorough coverage of important AI ideas, old and new Frequent use of examples and illustrative diagrams Extensive coverage of machine learning methods throughout the text Citations to over 500 references Comprehensive index",
    //     industryIdentifiers: [
    //       { type: "ISBN_13", identifier: "9780080499451" },
    //       { type: "ISBN_10", identifier: "0080499457" },
    //     ],
    //     readingModes: { text: true, image: true },
    //     pageCount: 513,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: true,
    //     contentVersion: "1.1.2.0.preview.3",
    //     panelizationSummary: {
    //       containsEpubBubbles: false,
    //       containsImageBubbles: false,
    //     },
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=lr1Po3DJZNIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=lr1Po3DJZNIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=lr1Po3DJZNIC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=7&source=gbs_api",
    //     infoLink:
    //       "https://play.google.com/store/books/details?id=lr1Po3DJZNIC&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://market.android.com/details?id=book-lr1Po3DJZNIC",
    //     id: "lr1Po3DJZNIC",
    //     shelf: "read",
    //   },
    //   {
    //     title: "Principles of Artificial Intelligence",
    //     authors: ["Nils J. Nilsson"],
    //     publisher: "Springer Science & Business Media",
    //     publishedDate: "1982-05-01",
    //     description:
    //       "Previous treatments of Artificial Intelligence (AI) divide the subject into its major areas of application, namely, natural language processing, automatic programming, robotics, machine vision, automatic theorem proving, intelligent data retrieval systems, etc. The major difficulty with this approach is that these application areas are now so extensive, that each could, at best, be only superficially treated in a book of this length. Instead, I have attempted here to describe fundamental AI ideas that underlie many of these applications. My organization of these ideas is not, then, based on the subject matter of their application, but is, instead, based on general computational concepts involving the kinds of data structures used, the types of operations performed on these data struc tures, and the properties of con'trol strategies used by AI systems. I stress, in particular, the important roles played in AI by generalized production systems and the predicate calculus. The notes on which the book is based evolved in courses and seminars at Stanford University and at the University of Massachusetts at Amherst. Although certain topics treated in my previous book, Problem solving Methods in Artificial Intelligence, are covered here as well, this book contains many additional topics such as rule-based systems, robot problem-solving systems, and structured-object representations.",
    //     industryIdentifiers: [
    //       { type: "ISBN_10", identifier: "3540113401" },
    //       { type: "ISBN_13", identifier: "9783540113409" },
    //     ],
    //     readingModes: { text: false, image: true },
    //     pageCount: 476,
    //     printType: "BOOK",
    //     categories: ["Computers"],
    //     averageRating: 5,
    //     ratingsCount: 2,
    //     maturityRating: "NOT_MATURE",
    //     allowAnonLogging: false,
    //     contentVersion: "preview-1.0.0",
    //     imageLinks: {
    //       smallThumbnail:
    //         "http://books.google.com/books/content?id=4JwN5DTpcqkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       thumbnail:
    //         "http://books.google.com/books/content?id=4JwN5DTpcqkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //     },
    //     language: "en",
    //     previewLink:
    //       "http://books.google.com/books?id=4JwN5DTpcqkC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=13&source=gbs_api",
    //     infoLink:
    //       "http://books.google.com/books?id=4JwN5DTpcqkC&dq=artificial+intelligence&hl=&source=gbs_api",
    //     canonicalVolumeLink:
    //       "https://books.google.com/books/about/Principles_of_Artificial_Intelligence.html?hl=&id=4JwN5DTpcqkC",
    //     id: "4JwN5DTpcqkC",
    //     shelf: "read",
    //   },
    // ];
    // const mockGetAllBooks = jest.spyOn(BooksListing, getAll);
    // mockGetAllBooks.mockResolvedValue(books);
    
    // expect(books).not.toHaveLength(0);

  // });

  // test('the data is peanut butter', () => {
  //   return getAll().then(data => {
  //     expect(data).not.toHaveLength(0);
  //   });
  // });

  const initialState = { 
    books:{
      uncategorizedBooks: [],
        currentlyReading: [],
        wantToRead: [],
        read: [],
        searchUncategorizedBooks: [],
    }
   };
   
  const mockStore = configureStore();
  let store;
   
  test('all Shelves has been rendered', async () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
          <BooksListing />
      </Provider>
  );

    expect(getByText('Currently Reading')).not.toBeNull();
    expect(getByText('Want To Read')).not.toBeNull();
    expect(getByText('Read')).not.toBeNull();
  }); 

});
