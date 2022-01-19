<?php

namespace App\Entity;

use App\Repository\VoitureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=VoitureRepository::class)
 */
class Voiture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $model;

    /**
     * @ORM\Column(type="string")
     */
    private $kmh;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $carateristiques;

    public function __construct()
    {
        $this->caracteristiques = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(string $model): self
    {
        $this->model = $model;

        return $this;
    }

    public function getKmh(): ?string
    {
        return $this->kmh;
    }

    public function setKmh(string $kmh): self
    {
        $this->kmh = $kmh;

        return $this;
    }


    public function getCaracteristiques(): ?string
    {
        return $this->carateristiques;
    }

    public function setCaracteristiques(?string $carateristiques): self
    {
        $this->carateristiques = $carateristiques;

        return $this;
    }
}
