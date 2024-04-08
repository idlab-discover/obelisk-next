import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  features: Feature[] = [
    {
      title: 'Scalable',
      logo: 'axes.svg',
      description:
        'Scalable data backend built using industry-proven technologies',
    },
    {
      title: 'Powerful APIs',
      logo: 'laptop-dev-mode.svg',
      description:
        'Ingest, query, stream and export large amounts of data using the efficient Obelisk HTTP-based APIs ',
    },
    {
      title: 'Security-aware',
      logo: 'shield-check.svg',
      description:
        'Data Isolation is a first-class citizen. Authentication and authorization are implemented using open standards ',
    },
    {
      title: 'Ease of use',
      logo: 'people-tag.svg',
      description:
        'Obelisk Ra allows users to quickly discover metadata of datasets, metrics and more',
    },
  ];

  features2: Feature[] = [
    {
      title: 'Open source',
      logo: 'code-brackets.svg',
      description: 'Obelisk Core is a fully open source project',
    },
    {
      title: 'Cloud Native',
      logo: 'cloud-check.svg',
      description:
        'Obelisk is developed as a cloud native application, easily deployable to the cloud using Helm',
    },
    {
      title: 'Extensible',
      logo: 'plus-square-dashed.svg',
      description:
        'Obelisk Core can be extended with 1st and 3rd party Obelisk Services',
    },
  ];

  references: Reference[] = [
    {
      name: 'GitHub',
      icon: 'github-circle.svg',
      padded: true,
      link: 'https://github.com/idlab-discover/obelisk',
    },
    {
      name: null,
      icon: 'logo_ugent_sm.png',
      padded: false,
      link: 'https://ugent.be',
    },
    {
      name: null,
      icon: 'logo_idlab_sm.png',
      padded: true,
      link: 'https://idlab.technology',
    },
    {
      name: null,
      icon: 'logo_imec_sm.png',
      padded: true,
      link: 'https://imec.be',
    },
  ];

  linkTo(url: string): void {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }
}

export interface Feature {
  title: string;
  logo: string;
  description: string;
}

export interface Reference {
  name: string | null;
  icon: string;
  padded: boolean;
  link: string;
}
