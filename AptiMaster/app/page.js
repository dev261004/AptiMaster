import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Aptitude Prep</title>
        <meta name="description" content="Aptitude Preparation Platform" />
      </Head>

      {/* Navbar */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Aptitude Prep
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#practice" className="text-white hover:text-gray-200 transition">Practice</a>
            </li>
            <li>
              <a href="#tests" className="text-white hover:text-gray-200 transition">Tests</a>
            </li>
            <li>
              <a href="#papers" className="text-white hover:text-gray-200 transition">Papers</a>
            </li>
            <li>
              <a href="#community" className="text-white hover:text-gray-200 transition">Community</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Aptitude Prep</h1>
          <p className="text-lg text-gray-600 mb-8">
            Prepare, practice, and succeed with our comprehensive aptitude preparation platform.
          </p>
          <a
            href="#practice"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full transition"
          >
            Get Started
          </a>
        </section>

        <section id="practice" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Practice Questions</h2>
          <p className="text-gray-600 mb-8">Explore our extensive repository of aptitude questions across various categories.</p>
          {/* You can add a card grid here */}
        </section>

        <section id="tests" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mock Tests</h2>
          <p className="text-gray-600 mb-8">Take full-length tests or customize your test experience.</p>
          {/* Add content/cards for tests */}
        </section>

        <section id="papers" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Previous Year Papers</h2>
          <p className="text-gray-600 mb-8">Access past exam papers from various competitive exams.</p>
          {/* Add content/cards for previous year papers */}
        </section>

        <section id="community" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Community</h2>
          <p className="text-gray-600 mb-8">Join discussion groups and interact with fellow aspirants.</p>
          {/* Add community section content */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-lg">Aptitude Prep</h4>
            <p className="text-sm">Empowering you to succeed.</p>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#practice" className="hover:text-white transition">Practice</a>
            </li>
            <li>
              <a href="#tests" className="hover:text-white transition">Tests</a>
            </li>
            <li>
              <a href="#papers" className="hover:text-white transition">Papers</a>
            </li>
            <li>
              <a href="#community" className="hover:text-white transition">Community</a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-700 text-center py-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} Aptitude Prep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
