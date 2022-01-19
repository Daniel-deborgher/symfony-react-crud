<?php

namespace App\Controller;

use App\Entity\Voiture;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api", name="api_")
 */
class VoitureController extends AbstractController
{
    /**
     * @Route("/voiture", name="voiture_index", methods={"GET"})
     */
    public function index(): Response
    {
        $products = $this->getDoctrine()
            ->getRepository(Voiture::class)
            ->findAll();
  
        $data = [];
  
        foreach ($products as $product) {
           $data[] = [
               'id' => $product->getId(),
               'model' => $product->getModel(),
               'kmh' => $product->getKmh(),
               'caracteristiques'=>$product->getCaracteristiques(),
           ];
        }
  
  
        return $this->json($data);
    }
    /**
     * @Route("/calculer/{id}", name="voiture_calcule", methods={"POST"})
     */
    public function calcule(int $id): Response
    {
        $voiture = $this->getDoctrine()
            ->getRepository(Voiture::class)
            ->find($id);
            $data =  [
                'id' => $voiture->getId(),
                'model' => $voiture->getModel(),
                'kmh' => $voiture->getKmh(),
                'caracteristiques'=>$voiture->getCaracteristiques(),
            ];
        return $this->json($data);
    }
  
    /**
     * @Route("/voiture", name="voiture_new", methods={"POST"})
     */
    public function new(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
  
        $voiture = new Voiture();
        $voiture->setModel($request->request->get('model'));
        $voiture->setKmh($request->request->get('kmh'));
        $voiture->setCaracteristiques($request->request->get('caracteristiques'));
  
        $entityManager->persist($voiture);
        $entityManager->flush();
  
        return $this->json('Created new voiture successfully with id ' . $voiture->getId());
    }
    
  
    /**
     * @Route("/voiture/{id}", name="voiture_show", methods={"GET"})
     */
    public function show(int $id): Response
    {
        $voiture = $this->getDoctrine()
            ->getRepository(Voiture::class)
            ->find($id);
  
        if (!$voiture) {
  
            return $this->json('No voiture found for id' . $id, 404);
        }
  
        $data =  [
            'id' => $voiture->getId(),
            'model' => $voiture->getModel(),
            'kmh' => $voiture->getKmh(),
            'caracteristiques'=>$voiture->getCaracteristiques(),
        ];
          
        return $this->json($data);
    }
  
    /**
     * @Route("/voiture/{id}", name="voiture_edit", methods={"PUT", "PATCH"})
     */
    public function edit(Request $request, int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $voiture = $entityManager->getRepository(Voiture::class)->find($id);
  
        if (!$voiture) {
            return $this->json('No voiture found for id' . $id, 404);
        }
        $content = json_decode($request->getContent());
         
        $voiture->setModel($content->model);
        $voiture->setKmh($content->kmh);
        $voiture->setCaracteristiques($content->caracteristiques);
  
        $entityManager->persist($voiture);
        
        $entityManager->flush();
  
        $data =  [
            'id' => $voiture->getId(),
            'model' => $voiture->getModel(),
            'kmh' => $voiture->getKmh(),
            'caracteristiques'=>$voiture->getCaracteristiques(),
        ];
          
        return $this->json($data);
    }
  
    /**
     * @Route("/voiture/{id}", name="voiture_delete", methods={"DELETE"})
     */
    public function delete(int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $voiture = $entityManager->getRepository(Voiture::class)->find($id);
  
        if (!$voiture) {
            return $this->json('No voiture found for id' . $id, 404);
        }
  
        $entityManager->remove($voiture);
        $entityManager->flush();
  
        return $this->json('Deleted a voiture successfully with id ' . $id);
    }
  
  
}
