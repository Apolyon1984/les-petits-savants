import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Groupe Scolaire Bilingue Les Petits Savants</title>
        <meta
          name="description"
          content="Site officiel du Groupe Scolaire Bilingue Les Petits Savants. Crèche, maternelle, primaire à Bamako. Inscrivez-vous dès maintenant."
        />
        <meta name="keywords" content="école, Bamako, bilingue, enfants, crèche, maternelle, primaire, Les Petits Savants" />
        <meta name="author" content="Groupe Scolaire Bilingue Les Petits Savants" />
      </Head>
      {/* Navigation */}
      <nav className="bg-purple-800 text-white px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">Les Petits Savants</div>
        <div className="space-x-4 text-sm">
          <a href="#inscription" className="hover:underline">Inscriptions</a>
          <a href="#galerie" className="hover:underline">Galerie</a>
          <a href="#localisation" className="hover:underline">Localisation</a>
          <a href="#apropos" className="hover:underline">À propos</a>
        </div>
      </nav>
      <header className="bg-purple-700 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">Groupe Scolaire Bilingue Les Petits Savants</h1>
        <p className="mt-2 text-lg">Déverrouiller le génie, un enfant à la fois</p>
      </header>
      <section id="inscription" className="px-4 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Inscriptions Ouvertes 2025-2026</h2>
        <p className="mb-6">
          Le Groupe Scolaire Bilingue Les Petits Savants accueille vos enfants de la crèche au primaire.
          Un enseignement de qualité, un environnement bilingue (français - anglais) et une équipe pédagogique engagée à Bamako.
        </p>
        <Card className="mb-6">
          <CardContent className="py-6">
            <h3 className="text-xl font-semibold mb-2">Contact et Inscriptions</h3>
            <p className="mb-2">Tél. / WhatsApp : +223 90157069 / 93488880</p>
            <p className="mb-2">Adresse : Sébénikoro, à 200m de la résidence de IBK</p>
            <form className="mt-4 space-y-2">
              <Input placeholder="Nom du parent" />
              <Input placeholder="Nom de l'enfant" />
              <Input placeholder="Classe demandée (crèche, maternelle, primaire)" />
              <Input placeholder="Numéro de téléphone" />
              <Button type="submit">Pré-inscription</Button>
            </form>
          </CardContent>
        </Card>
        <section id="galerie" className="my-10">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Galerie Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/photo1.jpg" alt="Classe" className="rounded shadow" />
            <img src="/images/photo2.jpg" alt="Activités" className="rounded shadow" />
            <img src="/images/photo3.jpg" alt="Jeux" className="rounded shadow" />
            <img src="/images/photo4.jpg" alt="Cantine" className="rounded shadow" />
            <img src="/images/photo5.jpg" alt="Bibliothèque" className="rounded shadow" />
            <img src="/images/photo6.jpg" alt="Cour de récréation" className="rounded shadow" />
          </div>
        </section>
        <section id="localisation" className="my-10">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Localisation</h3>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9263978313874!2d-8.0094!3d12.6342"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section id="apropos" className="my-10">
          <h3 className="text-xl font-bold text-purple-800 mb-4">À propos de l'école</h3>
          <p>
            Le Groupe Scolaire Bilingue Les Petits Savants est une école située à Sébénikoro.
            Elle accueille les enfants à partir de 3 mois (crèche) jusqu'au cycle primaire, dans un cadre bilingue (français-anglais).
            Notre mission est de favoriser l’épanouissement, l’autonomie et la réussite de chaque enfant dans le respect des valeurs humaines et de l’excellence académique.
          </p>
        </section>
        <div className="text-sm text-gray-500 mt-10">
          &copy; 2025 Groupe Scolaire Bilingue Les Petits Savants. Tous droits réservés.
        </div>
      </section>
    </div>
  );
}
