export default function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-dark-700 bg-dark-900">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} QA SkillScape Hub. Desenvolvido por Tiago Felipe.
        </p>
      </div>
    </footer>
  )
}
