<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChifoumiController extends AbstractController
{
    /**
     * @Route("/chifoumi", name="chifoumi")
     */
    public function index(): Response
    {
        return $this->render('chifoumi/index.html.twig', [
            'controller_name' => 'ChifoumiController',
        ]);
    }
}
