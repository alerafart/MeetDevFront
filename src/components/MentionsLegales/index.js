import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// == Import action creator
import { logout } from '../../actions/settings';
// == Import styles
import './mentionslegales.scss';
// == Component
function MentionsLegales() {
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch;

  return (
    <div className={isDark ? 'mentionslegales dark' : 'mentionslegales'}>
      <h3 className="mentionslegales__title">Mentions-Légales</h3>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Merci de lire avec attention les différentes modalités d’utilisation
        du présent site avant d’y parcourir ses pages.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004
        pour la confiance dans l’économie numérique,
        les responsables du présent site internet www.meetdev.fr sont :
      </p>
      <p className={isDark ? 'mentionslegales__subtitle dark' : 'mentionslegales__subtitle'}>Éditeur du Site</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Meet Dev</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Numéro de SIRET</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Téléphone</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Email : contact@meetdev.fr</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Site Web : www.meetdev.fr</p>

      <p className="mentionslegales__subtitle">Hébergement</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Hébergeur : OVH</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Site Web : www.meetdev.fr</p>

      <p className="mentionslegales__subtitle">Développement</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Meet Dev</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>Site Web : www.meetdev.fr</p>

      <p className="mentionslegales__subtitle">Conditions d’utilisation</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Ce site www.meetdev.fr est proposé en différents langages web
        (HTML, Javascript, CSS, React) pour un meilleur
        confort d’utilisation et un graphisme plus agréable.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>Nous vous recommandons de recourir à des navigateurs modernes
        comme Firefox, Google Chrome, Edge.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        L’agence web Meet Dev met en œuvre tous les moyens dont elle dispose,
        pour assurer une information fiable et une mise à jour fiable de ses sites internet.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>Toutefois, des erreurs ou omissions peuvent survenir.</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        L’internaute devra donc s’assurer de l’exactitude des informations auprès de MeetDev,
        et signaler toutes modifications du site qu’il jugerait utile.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        MeetDev n’est en aucun cas responsable de l’utilisation faite de ces informations,
        et de tout préjudice direct ou indirect pouvant en découler.
      </p>

      <p className="mentionslegales__subtitle">Cookies</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Le site www.meetdev.fr peut-être amené à vous demander l’acceptation des cookies
        pour des besoins de statistiques et d’affichage.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Un cookie est une information déposée sur votre disque dur
        par le serveur du site que vous visitez.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple
        fichier texte auquel un serveur accède pour lire et enregistrer des informations.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
      </p>

      <p className="mentionslegales__subtitle">Liens hypertextes</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les sites internet de peuvent offrir des liens vers d’autres sites internet
        ou d’autres ressources disponibles sur Internet.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Meet Dev ne dispose d’aucun moyen pour contrôler
        les sites en connexion avec ses sites internet.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Meet Dev ne répond pas de la disponibilité de tels sites et sources externes,
        ni ne la garantit.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Elle ne peut être tenue pour responsable de tout dommage,
        de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes,
        et notamment des informations, produits ou services qu’ils proposent,
        ou de tout usage qui peut être fait de ces éléments.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les risques liés à cette utilisation incombent pleinement à l’internaute,
        qui doit se conformer à leurs conditions d’utilisation.
      </p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les utilisateurs, les abonnés et les visiteurs des sites internet ne peuvent pas
        mettre en place un hyperlien en direction de ce site
        sans l’autorisation expresse et préalable de Meet Dev.
      </p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien
        en direction d’un des sites internet de Meet Dev,
        il lui appartiendra d’adresser un email accessible sur le site
        afin de formuler sa demande de mise en place d’un hyperlien.
      </p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Meet Dev se réserve le droit d’accepter ou de refuser un hyperlien
        sans avoir à en justifier sa décision.
      </p>

      <p className="mentionslegales__subtitle">Services fournis</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        L’ensemble des activités de la société ainsi que ses informations
        sont présentés sur notre site www.meetdev.fr
      </p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Meet Dev s’efforce de fournir sur le site www.meetdev.fr
        des informations aussi précises que possible.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les renseignements figurant sur le site www.meetdev.fr
        ne sont pas exhaustifs et les photos non contractuelles.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Ils sont donnés sous réserve de modifications ayant été apportées
        depuis leur mise en ligne.
      </p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Par ailleurs, tous les informations indiquées sur le site www.meetdev.fr
        sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
      </p>

      <p className="mentionslegales__subtitle">Limitation contractuelles sur les données</p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les informations contenues sur ce site sont aussi précises que possible
        et le site remis à jour à différentes périodes de l’année,
        mais peut toutefois contenir des inexactitudes ou des omissions.
      </p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement,
        merci de bien vouloir le signaler par courriel, à l’adresse contact@meetdev.fr,
        en décrivant le problème de la manière la plus précise possible (page posant problème,
        type d’ordinateur et de navigateur utilisé).
      </p>

      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Tout contenu téléchargé se fait aux risques et périls de l’utilisateur
        et sous sa seule responsabilité.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi
        par l’ordinateur de l’utilisateur ou d’une quelconque perte
        de données consécutives au téléchargement.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent,
        ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les liens hypertextes mis en place dans le cadre du présent site internet
        en direction d’autres ressources présentes sur le réseau Internet
        ne sauraient engager la responsabilité de Meet Dev.
      </p>
      <p className="mentionslegales__subtitle">Propriété intellectuelle</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Tout le contenu du présent site www.meetdev.fr, incluant, de façon non limitative,
        les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes
        ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception
        des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
        même partielle, de ces différents éléments est strictement interdite sans l’accord exprès
        par écrit de Meet Dev.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Cette représentation ou reproduction, par quelque procédé que ce soit, constitue
        une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
        de la propriété intellectuelle.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Le non-respect de cette interdiction constitue une contrefaçon
        pouvant engager la responsabilité civile et pénale du contrefacteur.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        En outre, les propriétaires des Contenus copiés pourraient intenter
        une action en justice à votre encontre.
      </p>
      <p className="mentionslegales__subtitle">Déclaration à la CNIL</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Conformément à la loi 78-17 du 6 janvier 1978
        (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection
        des personnes physiques à l’égard des traitements de données à caractère personnel)
        relative à l’informatique, aux fichiers et aux libertés, ce site a fait l’objet
        d’une déclaration 1656629 auprès de la Commission nationale
        de l’informatique et des libertés (www.cnil.fr).
      </p>
      <p className="mentionslegales__subtitle">Litiges</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les présentes conditions du site www.meetdev.fr sont régies par les lois françaises
        et toute contestation ou litiges qui pourraient naître de l’interprétation
        ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux
        dont dépend le siège social de la société.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>La langue de référence, pour le règlement de contentieux éventuels, est le français.</p>
      <p className="mentionslegales__subtitle">Données personnelles</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        De manière générale, vous n’êtes pas tenu de nous communiquer
        vos données personnelles lorsque vous visitez notre site Internet www.meetdev.fr.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>Cependant, ce principe comporte certaines exceptions.</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        En effet, pour certains services proposés par notre site,
        vous pouvez être amenés à nous communiquer certaines données telles que :
        votre nom, votre prénom, le nom de votre société, votre adresse mail,
        et votre numéro de téléphone.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne,
        dans la rubrique « contact ».
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>Dans tous les cas, vous pouvez refuser de fournir vos données personnelles.</p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Dans ce cas, vous ne pourrez pas utiliser les services du site,
        notamment celui de solliciter des renseignements sur notre société,
        ou de recevoir les lettres d’information.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Enfin, nous pouvons collecter de manière automatique certaines informations
        vous concernant lors d’une simple navigation sur notre site internet, notamment :
        des informations concernant l’utilisation de notre site,
        comme les zones que vous visitez et les services auxquels vous accédez,
        votre adresse IP, le type de votre navigateur, vos temps d’accès.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        De telles informations sont utilisées exclusivement à des fins de statistiques internes,
        de manière à améliorer la qualité des services qui vous sont proposés.
      </p>
      <p className={isDark ? 'mentionslegales__p dark' : ''}>
        Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998
        transposant la directive 96/9 du 11 mars 1996 relative à
        la protection juridique des bases de données.
      </p>
      <Link to="/">
        {/* button to come back at home page */}
        <button
          type="button"
          className={isDark ? 'inscription__form__buttons__button--cancel dark' : 'inscription__form__buttons__button--cancel'}
          onClick={() => {
            dispatch(logout());
          }}
        >Retour
        </button>
      </Link>
    </div>
  );
}

export default MentionsLegales;
