import styles from '../styles/components/Profile.module.css'
export function Profile()
{
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/jebnascimento.png" alt="José Eduardo"/>
      <div>
        <strong>Eduardo Nascimento</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}