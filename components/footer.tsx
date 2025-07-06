export function Footer() {
  return (
    <footer className="bg-heading-text text-white py-8 px-4">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</p>
        <p className="mt-2">Designed with care for your well-being.</p>
      </div>
    </footer>
  );
}