<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JeuducochonController extends AbstractController
{
    /**
     * @Route("/cochon", name="cochon")
     */
    public function index(): Response
    {
        return $this->render('jeuducochon/index.html.twig', [
            'controller_name' => 'JeuducochonController',
        ]);
    }
}
