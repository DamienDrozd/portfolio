# Guide de Test - Timeline Mobile

## Modifications apportées

### 🚀 Layout Mobile Optimisé

La timeline a été optimisée pour les petits écrans avec les modifications suivantes :

#### 1. **Ligne chronologique repositionnée**
- **Desktop** : Ligne centrale avec alternance gauche/droite
- **Mobile** : Ligne fixe à gauche (plus fine - w-0.5 au lieu de w-1)

#### 2. **Points chronologiques ajustés**
- **Desktop** : Points de 6x6 avec bordure de 4px
- **Mobile** : Points de 3x3 avec bordure de 2px, positionnés sur la ligne gauche

#### 3. **Cartes toutes à droite**
- **Desktop** : Alternance gauche/droite (w-5/12 chacune)
- **Mobile** : Toutes les cartes alignées à droite de la ligne (w-full avec pl-10)

#### 4. **Espacement et padding optimisés**
- **Mobile** : Padding réduit dans les cartes (p-4 au lieu de p-6)
- **Filtres** : Responsive avec flex-wrap et tailles adaptatives

## 🧪 Tests à effectuer

### 1. Test de responsive
```
1. Ouvrir http://localhost:3001/test-timeline
2. Ouvrir les outils de développement (F12)
3. Activer la vue mobile ou redimensionner la fenêtre
4. Vérifier que :
   - La ligne est bien à gauche
   - Toutes les cartes sont à droite
   - Les points sont bien alignés
   - Les filtres s'adaptent bien
```

### 2. Test des différents filtres
```
1. Tester "Tout" - doit afficher 6 éléments
2. Tester "Projets" - doit afficher 3 projets (GenPulse, RetroGameCollec, PEEL)
3. Tester "Expériences" - doit afficher 3 expériences (Reconomia, LaWEbox, Freelance)
```

### 3. Test des breakpoints
```
- < 768px (md) : Layout mobile avec ligne à gauche
- ≥ 768px (md) : Layout desktop avec alternance
```

## 📱 Breakpoints Tailwind utilisés

- `md:` : ≥ 768px (tablettes et desktop)
- `block md:hidden` : Visible uniquement sur mobile
- `hidden md:block` : Visible uniquement sur desktop et tablettes

## 🎨 Éléments visuels

### Couleurs utilisées
- **Projets** : #FFC300 (jaune)
- **Expériences** : #003D82 (bleu)
- **Ligne** : Gradient #FFC300 → #FFD60A → #FFC300

### Espacement mobile
- Ligne à `left-4` (16px du bord)
- Points centrés sur la ligne
- Cartes avec `pl-10` (40px de marge gauche)
- Padding de carte réduit à `p-4`

## ✅ Résultat attendu

Sur mobile, la timeline doit ressembler à ceci :

```
|●  [Carte 1 - 2025]
|
|●  [Carte 2 - 2023]  
|
|●  [Carte 3 - 2022]
|
|●  [Carte 4 - 2023]
|
```

Où la ligne `|` est à gauche, les points `●` sont sur la ligne, et toutes les cartes `[]` sont alignées à droite.