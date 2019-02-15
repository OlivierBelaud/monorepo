<template>
  <footer id="footer" role="contentinfo" class="footer">
    <div class="footer-top">
      <div class="footer-links">
        <div>
          <ul>
            <li>
              <nuxt-link to="/legals">
                Mentions légales
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/cookies-policy">
                Politique de cookies
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://www.facebook.com/messages/t/scensotv">
                Centre d'aide
              </a>
            </li>
            <li>
              <nuxt-link to="/presse">
                Presse
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <nuxt-link to="/cgu">
                Conditions générales de vente
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div><!--/footer-link-->
      <div class="footer-social-media">
        <p>Suivez-nous sur les réseaux</p>
        <div class="social-media">
          <ul>
            <li>
              <a href="https://www.facebook.com/scensotv/">
                <img height="30" width="30" src="~assets/img/social/social-media-facebook.svg" alt="facebook scenso.tv">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/scensotv/">
                <img height="30" width="30" src="~assets/img/social/social-media-instagram.svg" alt="instagram scenso.tv">
              </a>
            </li>
            <li>
              <a href="https://twitter.com/scensotv">
                <img height="30" width="30" src="~assets/img/social/social-media-twitter.svg" alt="twitter scenso.tv">
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCYP33E70Osm6agpuLGKYVnQ/featured?view_as=public">
                <img height="30" width="30" src="~assets/img/social/social-media-youtube.svg" alt="youtube scenso.tv">
              </a>
            </li>
          </ul>
        </div><!--/social-media-->
      </div><!--/footer-social-media-->
      <div id="mc_embed_signup" class="form-footer">
        <form
          id="mc-embedded-subscribe-form"
          action="https://polkatulk.us18.list-manage.com/subscribe/post?  u=70f54bfa37840d0e1e556d30c&amp;id=658c835bfd"
          method="post"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div>
            <p>Abonnez-vous à la newsletter</p>
            <div class="mc-field-group">
              <label for="mce-EMAIL" class="invisible">
                Votre adresse e-mail
                <span class="asterisk">
                  *
                </span>
              </label>
              <input
                id="mce-EMAIL"
                type="email"
                aria-label="Votre adresse e-mail"
                value=""
                name="EMAIL"
                class="required email"
                placeholder="Votre adresse e-mail"
              >
              <div id="mce-responses" class="clear">
                <p id="mce-error-response" class="response" style="display:none" />
                <p id="mce-success-response" class="response" style="display:none" />
              </div>
              <div>
                <input
                  id="mc-embedded-subscribe"
                  type="submit"
                  value="S’inscrire"
                  aria-label="s'inscrire à la newsletter"
                  name="subscribe"
                  class="button"
                >
              </div>
            </div><!--mc-field-group-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_70f54bfa37840d0e1e556d30c_658c835bfd" tabindex="-1" title="" value="">
            </div>
          </div>
          <p>Notre lettre d'informations contient des actualités sur notre plateforme, notre catalogue ainsi que l'actualité du monde du spectacle.</p>
        </form>
      </div><!--form-footer-->
    </div><!--/footer-top-->
    <div class="footer-bottom">
      <p>
        <a href="https://polkatulk.com/fr/">
          © scenso.tv / Polkatulk
        </a>
      </p>
    </div>
  </footer>
</template>
