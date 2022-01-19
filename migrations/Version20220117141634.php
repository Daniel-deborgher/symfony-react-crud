<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220117141634 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE voiture_carateristiques (voiture_id INT NOT NULL, carateristiques_id INT NOT NULL, INDEX IDX_DE76AD35181A8BA (voiture_id), INDEX IDX_DE76AD35E1DC17D4 (carateristiques_id), PRIMARY KEY(voiture_id, carateristiques_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE voiture_carateristiques ADD CONSTRAINT FK_DE76AD35181A8BA FOREIGN KEY (voiture_id) REFERENCES voiture (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE voiture_carateristiques ADD CONSTRAINT FK_DE76AD35E1DC17D4 FOREIGN KEY (carateristiques_id) REFERENCES carateristiques (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE voiture_carateristiques');
    }
}
